import React from "react";
import "./Button.css";

function Button({ disabled }) {
  return (
    <button className={disabled ? "disabled" : "button"}>
        Next
    </button>
  )
}

export default Button