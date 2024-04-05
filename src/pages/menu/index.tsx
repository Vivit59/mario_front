import React from "react";
import PizzaList from "../../components/pizzaList";
import Pizza from "../../models/pizza";
import { mockDataPizza } from "../../data/MockData";

const Menu = () => {
  const pizzaL: Pizza[] = mockDataPizza;
  return (
    <div>
      <PizzaList pizzas={pizzaL} />
    </div>
  );
};

export default Menu;
