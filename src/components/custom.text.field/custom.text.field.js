import React, { useState, useEffect, forwardRef } from "react";
import "./custom.text.field.css"; // Import your CSS file

const TextFieldWithSuffix = forwardRef(function ({
  suffix,
  onInputChange,
  value,
  refs,
}) {
  useEffect(() => {
    setTextFieldValue(value);
  }, [value]);

  const [textFieldValue, setTextFieldValue] = useState("");

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
    onInputChange(event.target.value);
  };

  return (
    <div className="input">
      <input
        type="text"
        className="input"
        value={textFieldValue}
        onChange={handleTextFieldChange}
        ref={refs}
      />
      <label>{suffix}</label>
    </div>
  );
});

export default TextFieldWithSuffix;
