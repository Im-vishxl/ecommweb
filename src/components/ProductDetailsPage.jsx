
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetailsPage = ({ product }) => {
  const navigate = useNavigate();

  const handlePlaceOrderClick = () => {
    navigate('/payment', { state: { product } }); // Pass product data to payment page
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ₹{product.price}</p>
        <button onClick={handlePlaceOrderClick}>Place Order</button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
