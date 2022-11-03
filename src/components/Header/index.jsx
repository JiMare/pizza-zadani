import React from "react";
import { usePrefs } from "../../prefs-context";
import "./style.css";

export const Header = () => {
  const { veganOnly, toggleVeganOnly } = usePrefs();
  return (
    <header>
      <div className="pizza" />
      <h1>Build your own pizza</h1>
      <button
        onClick={toggleVeganOnly}
        className={
          veganOnly
            ? "button__ingredients"
            : "button__ingredients button__ingredients--vegan"
        }
      >
        {veganOnly ? "All ingredients" : "Only vegan"}
      </button>
    </header>
  );
};
