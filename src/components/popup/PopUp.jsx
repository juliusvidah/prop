import React, { useState } from 'react';
import './popup.css'
import PricePredictor from '../pricepredictor/PricePredictor';

const PopUp = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button className='pop2' onClick={handleButtonClick}>Price Predictor</button>
     
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
           <PricePredictor/>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;