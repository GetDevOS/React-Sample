import React, { useState } from "react";

function TextField({ onInputChange }) {
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
    onInputChange(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={textFieldValue}
        onChange={handleTextFieldChange}
        placeholder="Enter text..."
      />
    </div>
  );
}

export default TextField;
