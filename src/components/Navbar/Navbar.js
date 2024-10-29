import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import cartlogo from './Images/cart.jpeg';
import logo from './Images/amazon logo.png';
import './Navbar.css';

const Navbar = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <img src={logo} alt='' style={{width:150}}/>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link position-relative" to="/cart">
                                Cart {cartItems}
                                <img src={cartlogo} alt='' style={{height:45}}/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;