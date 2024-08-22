import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; // Import BrowserRouter, Routes, Route, and useNavigate
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Popup from './components/Popup';
import PersistentPopup from './components/PersistentPopup';
import Checkout from './components/Checkout'; // Import Checkout component
import './App.css';

const App = () => {
    const [cart, setCart] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [showPersistentPopup, setShowPersistentPopup] = useState(true);
    const navigate = useNavigate(); // useNavigate hook for navigation

    const products = [
        { id: 1, name: 'Signature Latte', price: 6.99, image: './productimages/espresso.png' }, /*Unsplash photographer*/
        { id: 2, name: 'Iced Coffee', price: 6.99, image: './productimages/iced-coffee.jpg' }, /*Unsplash photographer*/
        { id: 3, name: 'Cloud Iced Latte', price: 7.99, image: './productimages/iced-latte.jpg' }, /*Unsplash photographer*/
        { id: 4, name: 'Iced Matcha', price: 7.99, image: './productimages/iced-matcha.jpg' }, /*Unsplash photographer*/
        { id: 5, name: 'Home Brew', price: 6.99, image: './productimages/drip-coffee.jpg' }, /*Unsplash photographer*/
        { id: 6, name: 'Honey Green Tea', price: 7.99, image: './productimages/honey-tea.jpg' }, /*Unsplash photographer*/
        { id: 7, name: 'Iced Hibiscus', price: 7.99, image: './productimages/iced-hibiscus.jpg' }, /*Unsplash photographer*/
        { id: 8, name: 'Amerie Waffle', price: 12.99, image: './productimages/waffle.jpg' }, /*Unsplash photographer*/
        { id: 9, name: 'Blueberry Danish', price: 5.99, image: './productimages/blueberrydanish.jpg' }, /*Unsplash photographer*/
        { id: 10, name: 'Nutella Pie', price: 6.99, image: './productimages/nutella-pie.jpg' }, /*Unsplash photographer*/
        { id: 10, name: 'Pancakes', price: 6.99, image: './productimages/pancakes.jpg' }, /*Unsplash photographer*/
        { id: 10, name: 'Breakfast Pizza', price: 6.99, image: './productimages/pizza.jpg' }, /*Unsplash photographer*/
        { id: 11, name: 'Brooklyn Bagel', price: 10.99, image: './productimages/brooklyn-bagel.jpg' }, /*Unsplash photographer*/
        { id: 12, name: 'Eggs Benedict', price: 16.99, image: './productimages/eggs-benedict.jpg' }, /*Unsplash photographer*/
        { id: 8, name: 'Tomato Soup', price: 12.99, image: './productimages/tomato-soup.jpg' }, /*Unsplash photographer*/
        { id: 9, name: 'Mexican Stirfry', price: 5.99, image: './productimages/mexican-stirfry.jpg' }, /*Unsplash photographer*/
        { id: 10, name: 'House Salad', price: 6.99, image: './productimages/salad.jpg' }, /*Unsplash photographer*/
        { id: 10, name: 'Kale Pasta', price: 6.99, image: './productimages/kale-pasta.jpg' }, /*Unsplash photographer*/
        { id: 10, name: 'Poke Bowl', price: 6.99, image: './productimages/poke-bowl.jpg' }, /*Unsplash photographer*/
        { id: 11, name: 'Squash Soup', price: 10.99, image: './productimages/squash.jpg' }, /*Unsplash photographer*/
        { id: 12, name: 'House Burrito', price: 16.99, image: './productimages/burrito.jpg' }, /*Unsplash photographer*/
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const closePersistentPopup = () => {
        setShowPersistentPopup(false);
    };

    // Function to handle checkout button click
    const handleCheckout = () => {
        navigate('/checkout');
    };

    useEffect(() => {
        // Any logic that needs to run when the component mounts
    }, []);

    return (
        <div className="app">
            <header>
                <h1>Amerie Cafe</h1>
                <h2>4115 Boulevard Saint-Jean Montreal PH: 514-786-9844</h2>
            </header>
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ProductList products={products} addToCart={addToCart} />
                                <Cart cartItems={cart} removeFromCart={removeFromCart} />
                                <button onClick={togglePopup}>15% COUPON CODE</button>
                                {showPopup && <Popup message="ILUVCOFFEE" closePopup={togglePopup} />}
                                {showPersistentPopup && <PersistentPopup closePopup={closePersistentPopup} />}
                                {cart.length > 0 && (
                                    <button onClick={handleCheckout}>Proceed to Checkout</button>
                                )}
                            </>
                        }
                    />
                    <Route path="/checkout" element={<Checkout cartItems={cart} />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;