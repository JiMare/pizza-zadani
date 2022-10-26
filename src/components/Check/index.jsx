import React from "react";
import "./style.css";

const Check = ({ checked, onChange, disabled }) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <button
      className={disabled ? "check check--disabled" : "check"}
      onClick={handleClick}
    >
      {checked && !disabled ? "✓" : ""}
    </button>
  );
};

export default Check;
