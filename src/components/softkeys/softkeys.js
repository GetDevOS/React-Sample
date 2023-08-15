import React from "react";
import "./softkeys.css";

export default function SoftKeys({ props }) {
  return (
    <>
      <div class="softkey">
        <label class="left">{props.left}</label>
        <label class="center">{props.center}</label>
        <label class="right">{props.right}</label>
      </div>
    </>
  );
}
