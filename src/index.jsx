import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import ToppingsSelect from "./components/ToppingsSelect";
import { PrefsContext } from "./prefs-context";
import "./style.css";

const toppings = [
  {
    name: "Pepperoni",
    price: 1,
    vegan: false,
  },
  {
    name: "Mushroom",
    price: 0.35,
    vegan: true,
  },
  {
    name: "Extra cheese",
    price: 0.5,
    vegan: false,
  },
  {
    name: "Sausage",
    price: 0.8,
    vegan: false,
  },
  {
    name: "Onion",
    price: 0.25,
    vegan: true,
  },
  {
    name: "Black olives",
    price: 0.65,
    vegan: true,
  },
  {
    name: "Green pepper",
    price: 0.55,
    vegan: true,
  },
  {
    name: "Fresh garlic",
    price: 0.1,
    vegan: true,
  },
  {
    name: "Tomato",
    price: 0.5,
    vegan: true,
  },
  {
    name: "Fresh basil",
    price: 0.15,
    vegan: true,
  },
  {
    name: "Pineapple",
    price: 0.7,
    vegan: true,
  },
  {
    name: "Prosciutto",
    price: 1.2,
    vegan: false,
  },
];

const App = () => {
  const [veganOnly, setVeganOnly] = useState(true);

  const toggleVeganOnly = () => {
    setVeganOnly(!veganOnly);
  };
  return (
    <PrefsContext.Provider value={{ veganOnly, toggleVeganOnly }}>
      <div className="container">
        <Header />
        <main>
          <ToppingsSelect toppings={toppings} />
        </main>
      </div>
    </PrefsContext.Provider>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
