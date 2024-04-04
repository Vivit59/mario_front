import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import PizzaList from "./components/pizzaList";
import { mockDataPizza } from "./data/MockData";
import Pizza from "./models/pizza";

function App() {
  const pizzaL: Pizza[] = mockDataPizza;
  return (
    <div className="App">
      <Header />
      <PizzaList pizzas={pizzaL} />
    </div>
  );
}

export default App;
