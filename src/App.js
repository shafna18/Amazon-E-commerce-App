import './App.css';
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/Context/CartContext';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import AboutUs from './components/About Us/About';
import ContactUs from './components/Contact/Contact';
// import ProductCard from './components/ProductCard/ProductCard';

function App() {


  return (
    <CartProvider>
    <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products" exact element={<ProductList/>} />
                <Route path="/product/:id" element={<ProductDetail/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/About" element={<AboutUs/> } />
                <Route path="/Contact" element={<ContactUs />} />
                {/* <Route path="*" element={<div className="container my-5"><h2>404 - Page Not Found</h2></div>} /> */}
            </Routes>
            <Footer />
        </div>
    </Router>
</CartProvider>
  );
}

export default App;
