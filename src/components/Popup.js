import React from 'react';
import './Popup.css'; // Optional: Add styles in a separate CSS file

const Popup = ({ message, closePopup }) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>{message}</h2>
                <button onClick={closePopup}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
