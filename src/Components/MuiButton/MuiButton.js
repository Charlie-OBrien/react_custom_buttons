import React from "react";
import Button from '@mui/material/Button';

const MuiButton = ({ label, handleClick, handleMouseOver }) => (
    <Button
      className="btn btn-default"
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      variant="contained"
    >
      {label}
    </Button>
  );
  
  export default MuiButton;