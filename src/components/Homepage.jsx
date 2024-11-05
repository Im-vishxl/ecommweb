import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bannerimg from '../assets/bannerimg1.jpg';

import './Homepage.css';

const Homepage = () => {

  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);


  return (
    <div className="homepage">
      {/* Categories Section */}
      <div className="categories">

        <div className="category-list">
          <button>Mobiles</button>
          <button>Electronics</button>
          <button>Clothing</button>
          <button>Home Appliances</button>
          <button>Books</button>
          <button>Computers</button>
          <button>Toys</button>
          <button>Acceccories</button>
          
        </div>
      </div>

      
      <div className="banner">
        <div className="banner-content">
          <img src={bannerimg} alt="offer" className="bannerimg" />
        </div>
      </div>

      
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product._id} className="product-card" onClick={() => handleProductClick(product._id)}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>Price: ₹{product.price}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
