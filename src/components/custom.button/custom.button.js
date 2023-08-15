import React from "react";
import "./custom.button.css";

function CustomButton({ onChange }) {
  return (
    <div>
      <button className="button" onClick={onChange}>
        Get Started
      </button>
    </div>
  );
}

export default CustomButton;
