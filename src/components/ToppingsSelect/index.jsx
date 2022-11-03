import React, { useState } from "react";
import { usePrefs } from "../../prefs-context";
import Topping from "../Topping";
import "./style.css";

const ToppingsSelect = ({ toppings }) => {
  const { veganOnly } = usePrefs();
  const [checkedToppings, setCheckedToppings] = useState(
    toppings.map((topping) => false)
  );

  const handleCheckedChange = (index) => {
    const newCheckedToppings = [...checkedToppings];
    if (!veganOnly || toppings[index].vegan) {
      newCheckedToppings[index] = !checkedToppings[index];
    }
    setCheckedToppings(newCheckedToppings);
  };

  const selectedToppingsPrice = toppings
    .filter((topping, index) =>
      !veganOnly
        ? checkedToppings[index]
        : checkedToppings[index] && topping.vegan
    )
    .map((topping) => topping.price)
    .reduce((sum, value) => {
      return sum + value;
    }, 0);

  const selectedToppings = checkedToppings.filter((topping, index) =>
    !veganOnly ? topping : topping && toppings[index].vegan
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
            onChangeChecked={() => {
              handleCheckedChange(index);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
