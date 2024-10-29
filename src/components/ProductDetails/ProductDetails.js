import React, { useState, useEffect, useContext } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  if (!product) return <div>Loading...</div>;
  return (
    <div className='product-details'>
      <img src={product.image} alt={product.title} height={300}/>
      <div className='card-body'>
        <div className='card-title'>{product.title}</div>
        <div className='card-description'>{product.description}</div>
        <div className='price'>${product.price}</div>
        <div className='rating'>Rating:{product.rating.rate}</div>
        <div className='count'>Review:{product.rating.count}</div>
        <Link to={'/cart'}>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
