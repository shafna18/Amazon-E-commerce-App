import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addToCart(product);
        navigate('/cart');
    };

    return (
        <div className="card h-100">
            <Link to={`/products/${product.id}`}>
                <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
            </Link>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{ fontSize: '1rem' }}>{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <button onClick={handleAddToCart} className="mt-auto">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
