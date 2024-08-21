import React from 'react';
import './PersistentPopup.css'; // Optional: Add styles in a separate CSS file

const PersistentPopup = ({ closePopup }) => {
    return (
        <div className="persistent-popup">
            <div className="persistent-popup-inner">
                <button className="close-button" onClick={closePopup}>X</button>
                <h2>Welcome to Amerie Cafe!</h2>
                <p>Place breakfast orders by 7:00am for 9:00am delivery.</p> <p>Place lunch orders by 11:00am for 1:00pm delivery.</p>
            </div>
        </div>
    );
};

export default PersistentPopup;
