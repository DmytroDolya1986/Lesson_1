import React from "react";

const GoodButton = () => (
    <button 
        className="fancy-button"
        onClick={() => alert('Good Job!')}
    >
        Click me!
    </button>
);

export default GoodButton;
