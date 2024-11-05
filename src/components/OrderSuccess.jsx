import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { product, paymentMethod } = location.state || {};

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className="order-success-container">
            <div className="Orderdetails-card">
                <h2>Order Successful!</h2>
                {product && (
                    <div className="order-details">
                        <h3>Product: {product.name}</h3>
                        <p>Price: ₹{product.price}</p>
                        <p>Payment Method: {paymentMethod}</p>
                    </div>
                )}
            </div>
            <button onClick={handleBackToHome} className="home-btn">Back to Home</button>
        </div>
    );
};

export default OrderSuccess;
