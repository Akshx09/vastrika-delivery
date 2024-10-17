import { order } from './orderItem';
import './Order.css';
import { useState } from 'react';
import Order from './Order';

export default function RemainOrder(props) {
    // State to hold the list of orders
    const [orders, setOrders] = useState(order);
    
    // Function to handle when "Accepted button" button is clicked
    const handleDelivery = (orderId) => {
        props.setAcceptedOrder(prevAcceptedOrders => [...prevAcceptedOrders, orderId]);
        setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderId));
    };
    // Generate the items using map() and return each Orderitem
    const items = orders.map((element, index) => (
        <div key={index} className="ticket">
        <div className="ticket-header">
            <h4>Order #{element.orderId}</h4>
            <button onClick={() => handleDelivery(element.orderId)} className="accept-btn">Accept</button>
        </div>
        <div className="ticket-body">
            <p><strong>Customer Name:</strong> {element.customerName}</p>
            <p><strong>Address:</strong> {element.customerAddress}</p>
            <p><strong>Phone:</strong> {element.phone}</p>
        </div>
       </div>
    ));

    return (
        <div className="order">
             <div className="ticket-container">
            {items}
        </div>
        </div>
    );
}
