import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Popup from './components/Popup';
import PersistentPopup from './components/PersistentPopup';
import './App.css';

const App = () => {
    const [cart, setCart] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [showPersistentPopup, setShowPersistentPopup] = useState(true);

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
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const closePersistentPopup = () => {
        setShowPersistentPopup(false);
    };

    // Effect to run once on page load
    useEffect(() => {
        // You can add any logic that should run when the component mounts
    }, []);

    return (
        <div className="app">
            <header>
                <h1>Amerie Cafe</h1>
            </header>
            <main>
                <ProductList products={products} addToCart={addToCart} />
                <Cart cartItems={cart} />

                {/* Button to show the pop-up */}
                <button onClick={togglePopup}>15% COUPON CODE</button>

                {/* Conditionally render the pop-up */}
                {showPopup && <Popup message="ILUVCOFFEE" closePopup={togglePopup} />}

                {/* Persistent pop-up */}
                {showPersistentPopup && <PersistentPopup closePopup={closePersistentPopup} />}
            </main>
        </div>
    );
};

export default App;



