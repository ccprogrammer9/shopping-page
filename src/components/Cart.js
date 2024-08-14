import React from 'react';

const Cart = ({ cartItems }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>{item.name} - ${item.price}</li>
                    ))}
                </ul>
            )}
            <p>Total: ${total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
