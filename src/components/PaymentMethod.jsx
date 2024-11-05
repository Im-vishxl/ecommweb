import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PaymentMethods.css';

const PaymentMethods = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { product } = location.state || {};
    const [selectedMethod, setSelectedMethod] = useState('');

    const paymentMethods = [
        { id: 1, name: 'Credit Card' },
        { id: 2, name: 'Debit Card' },
        { id: 3, name: 'UPI' },
        { id: 4, name: 'Cash on Delivery' },
    ];

    const handlePaymentSelect = (method) => {
        setSelectedMethod(method); 
        console.log(`Selected payment method: ${method}`);
        // Handle selection logic here
    };

    const handleContinue = () => {
        if (selectedMethod) {
            alert('Payment Successful!');
    
            navigate('/order', { 
                state: { 
                    product: product || null, 
                    paymentMethod: selectedMethod 
                } 
            });
        } else {
            alert('Please select a payment method.');
        }
    };

    return (
        <div className="payment-container">
            <div className="payment-methods">
                <h2>Select Payment Method</h2>
                <ul>
                    {paymentMethods.map((method) => (
                        <li key={method.id} className="methodd">
                            <label>
                                <input
                                    value={method.name}
                                    checked={selectedMethod === method.name}
                                    onChange={() => handlePaymentSelect(method.name)}
                                    type="radio"
                                />
                                {method.name}
                            </label>
                        </li>
                    ))}
                </ul>
                <button onClick={handleContinue}>continue</button>
            </div>
            {product && (
                <div className="product-details-payment">
                    <h2>Ordering: {product.name}</h2>
                    <h3>Price: ₹{product.price}</h3>
                    <h2>Delivering to,</h2>
                    <h3>Flat, House no., Building</h3>
                    <h3>Area, Street, Sector, Village</h3>
                    <h3>Pincode, Town/city</h3>
                </div>
            )}
        </div>
    );
};

export default PaymentMethods;
