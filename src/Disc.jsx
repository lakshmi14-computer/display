import React, { useState } from 'react';
import './index.css'; // Assuming you have a CSS file for styling

const Disc = () => {
  const [showText, setShowText] = useState(false);

  const handleShow = () => {
    setShowText(true);
  };

  const handleHide = () => {
    setShowText(false);
  };

  return (
   
    <div className="show-text-container">
      <div className="box">
        <div className="image-container">
          <img
            src="https://i.pinimg.com/originals/07/99/0d/07990de3a791c7330131934bc546ad25.gif"
            alt="Envelope"
            className="envelope-image"
          />
        </div>
        {showText && <p className="text">Hello</p>}
        <div className="button-container">
          <button onClick={handleShow} className="show-button">Show</button>
          <button onClick={handleHide} className="hide-button">Hide</button>
        </div>
      </div>
    </div>
  
  );
};

export default Disc;
