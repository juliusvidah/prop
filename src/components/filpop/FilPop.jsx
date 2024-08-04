import React, { useState } from 'react';
import './filpop.css'
import Filter from '../filter/Filter';

const FilPop = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* <button className='filpop1' onClick={handleButtonClick}>Filter Property</button> */}
     
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
           <Filter/>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilPop;