import React from "react";
import { usePrefs } from "../../prefs-context";
import Check from "../Check";
import "./style.css";

const Topping = ({ topping, checked, onChangeChecked }) => {
  const { veganOnly } = usePrefs();

  const handleChecked = (checked) => {
    onChangeChecked(checked);
  };

  const isDisabled =
    veganOnly && (topping.name === "Sausage" || topping.name === "Prosciutto");

  return (
    <div className="topping">
      <Check checked={checked} onChange={handleChecked} disabled={isDisabled} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
