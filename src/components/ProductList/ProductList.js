import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Productlist.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className='product-container'>
     <div className="product-list">
        {products.map((product) => (
          <div className='products' key={product.id} style={{ width: '18rem' }}>
            <img src={product.image} alt={product.title} height={150}/>
              <div className='card-title'>{product.title}</div>
              <div className='card-description'>{product.description}</div>
              <div className='price'>${product.price}</div>
              <Link to={`/product/${product.id}`}>
            <button>
              view more
            </button>
          </Link>
           </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
