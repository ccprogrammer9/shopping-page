import React from 'react';
import './Checkout.css'; // Ensure this path is correct

const Checkout = ({ cartItems }) => {
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        alert('Order submitted!');
    };

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <h2>Checkout</h2>
            </div>
            <div className="checkout-content">
                <div className="order-summary">
                    <h3>Order Summary</h3>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className="order-item">
                                    <div className="order-item-name">{item.name}</div>
                                    <div className="order-item-price">${item.price.toFixed(2)}</div>
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className="order-total">
                        <strong>Total: ${getTotalPrice()}</strong>
                    </div>
                </div>

                <div className="checkout-form-container">
                    <form className="checkout-form" onSubmit={handleSubmit}>
                        <h3>Payment Details</h3>
                        {/* Form fields */}
                        <label>Name</label>
                        <input type="text" required />
                        <label>Address</label>
                        <input type="text" required />
                        <label>Phone</label>
                        <input type="text" required />
                        <label>Coupon Code</label>
                        <input type="text" />
                        <label>Credit Card</label>
                        <input type="text" required />
                        {/* Add more fields as necessary */}

                        <button type="submit" className="submit-button">Submit Order</button>
                    </form>
                    <div className="image-container">
                        <img src="/productimages/chefs.png" alt="Our Chefs" className="chefs-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;


