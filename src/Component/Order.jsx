import { order } from './orderItem';
import './Order.css';
import { useState } from 'react';

export default function Order(props) {
    // State to hold the list of orders
    const [orders, setOrders] = useState(order);

    // Function to handle when "Delivered" button is clicked
    const handleDelivery = (orderId) => {
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.orderId === orderId
                    ? { ...order, showOTP: true } // Show OTP input for this order
                    : order
            )
        );
    };

    // Function to handle OTP submission
    const handleOTPSubmit = (orderId, otp) => {
        // Filter out the delivered order from the list
        setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderId));
    };

    // Generate the items using map() and return each order as a ticket
    const items = orders.map((element, index) => (
        (props.acceptedOrder && props.acceptedOrder.includes(element.orderId)) ? (
            <OrderItem
                key={index}  // Ensure each item has a unique key
                orderId={element.orderId}
                customerName={element.customerName}
                customerAddress={element.customerAddress}
                phone={element.phone}
                status={element.status}
                showOTP={element.showOTP}
                handleDelivery={handleDelivery}
                handleOTPSubmit={handleOTPSubmit}
            />
        ) : null
    ));

    // Component to display each order as a ticket-style card
    function OrderItem(props) {
        const [otp, setOtp] = useState('');

        // Handle OTP input change
        const handleOTPChange = (e) => {
            setOtp(e.target.value);
        };

        return (
            <div className="ticket">
                <div className="ticket-header">
                    <h4>Order #{props.orderId}</h4>
                    <p>Status: {props.status}</p>
                </div>
                <div className="ticket-body">
                    <p><strong>Customer Name:</strong> {props.customerName}</p>
                    <p><strong>Address:</strong> {props.customerAddress}</p>
                    <p><strong>Phone:</strong> {props.phone}</p>
                    {props.showOTP ? (
                        <div className="otp-section">
                            <input
                                type="number"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={handleOTPChange}
                                required
                            />
                            <button onClick={() => props.handleOTPSubmit(props.orderId, otp)} className="submit-btn">
                                Submit
                            </button>
                        </div>
                    ) : (
                        <button onClick={() => props.handleDelivery(props.orderId)} className="delivered-btn">
                            Delivered
                        </button>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="ticket-container">
            {items}
        </div>
    );
}
