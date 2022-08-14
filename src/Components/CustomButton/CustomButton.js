import React from "react";


const CustomButton = ({ label, handleClick, handleMouseOver }) => (
    <button
      className="btn btn-default"
      onClick={handleClick}
      onMouseOver={handleMouseOver}
    >
      {label}
    </button>
  );
  
  export default CustomButton;