import React from 'react';
import './PersistentPopup.css'; // Optional: Add styles in a separate CSS file

const PersistentPopup = ({ closePopup }) => {
    return (
        <div className="persistent-popup">
            <div className="persistent-popup-inner">
                <button className="close-button" onClick={closePopup}>X</button>
                <h2>Welcome to Amerie Cafe!</h2>
                <p>Place orders before 10:00am for same-day delivery.</p>
            </div>
        </div>
    );
};

export default PersistentPopup;
