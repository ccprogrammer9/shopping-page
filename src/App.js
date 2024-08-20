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
        { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 19.99, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150' },
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



