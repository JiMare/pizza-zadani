import React, { useState } from "react";
import { usePrefs } from "../../prefs-context";
import Topping from "../Topping";
import "./style.css";

const ToppingsSelect = ({ toppings }) => {
  const { veganOnly } = usePrefs();
  const [checkedToppings, setCheckedToppings] = useState(
    toppings.map((e) => false)
  );

  const handleCheckedChange = (index, checked) => {
    const newCheckedToppings = [...checkedToppings];
    if (!veganOnly || (index !== 3 && index !== 11)) {
      newCheckedToppings[index] = checked;
    }
    setCheckedToppings(newCheckedToppings);
  };

  const selectedToppingsPrice = toppings
    .filter((topping, index) =>
      !veganOnly
        ? checkedToppings[index]
        : checkedToppings[index] &&
          topping.name !== "Sausage" &&
          topping.name !== "Prosciutto"
    )
    .map((topping) => topping.price)
    .reduce((sum, value) => {
      return sum + value;
    }, 0);

  const selectedToppings = checkedToppings.filter((e, index) =>
    !veganOnly ? e : e && index !== 3 && index !== 11
  ).length;

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {selectedToppings}, total price:{" "}
        {selectedToppingsPrice} Euro
      </p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            checked={checkedToppings[index]}
            onChangeChecked={(checked) => {
              handleCheckedChange(index, checked);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
