import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2>Your Cart</h2>
            </div>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <div className="cart-item-details">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-price">${item.price.toFixed(2)}</div>
                            <div className="cart-item-quantity">Quantity: 1</div>
                        </div>
                        {/* Use removeFromCart with correct index */}
                        <button
                            className="remove-button"
                            onClick={() => removeFromCart(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
            {cartItems.length > 0 && (
                <div className="cart-footer">
                    <div className="cart-total">Total: ${getTotalPrice()}</div>
                </div>
            )}
        </div>
    );
};

export default Cart;
