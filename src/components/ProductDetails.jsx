import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetailsPage from '../components/ProductDetailsPage'; 

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product details based on ID
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  // Show a loading message while the product is being fetched
  if (loading) return <div>Loading...</div>;

  if (!product) return <div>Product not found</div>;

  // Render the ProductDetailsPage with the fetched product data
  return <ProductDetailsPage product={product} />;
};

export default ProductDetails;
