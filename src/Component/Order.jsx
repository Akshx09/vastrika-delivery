import { order } from './orderItem';
import './Order.css';
import { useState } from 'react';

export default function Order() {
    // State to hold the list of orders
    const [orders, setOrders] = useState(order);

    // Function to handle when "Delivered" button is clicked
    const handleDelivery = (orderId) => {
        // Find the order by orderId and update the "show OTP" state for that specific order
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
            setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderId));
    };

    // Generate the items using map() and return each Orderitem
    const items = orders.map((element, index) => (
        <Orderitem
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
    ));

    // Component to display each order item row
    function Orderitem(props) {
        const [otp, setOtp] = useState('');

        // Handle OTP input change
        const handleOTPChange = (e) => {
            setOtp(e.target.value);
        };

        return (
            <tr>
                <td>{props.orderId}</td>
                <td>{props.customerName}</td>
                <td>{props.customerAddress}</td>
                <td>{props.phone}</td>
                <td>{props.status}</td>
                <td>
                    {props.showOTP ? (
                        <div>
                            <input
                                type="number"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={handleOTPChange}
                                required
                            />
                            <button onClick={() => props.handleOTPSubmit(props.orderId, otp)}>
                                Submit
                            </button>
                        </div>
                    ) : (
                        <button onClick={() => props.handleDelivery(props.orderId)}>Delivered</button>
                    )}
                </td>
            </tr>
        );
    }

    return (
        <div className="order">
            <table>
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Customer Name</th>
                        <th>Customer Address</th>
                        <th>Phone Number</th>
                        <th>Status</th>
                        <th className='delivery'>Delivered</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        </div>
    );
}
