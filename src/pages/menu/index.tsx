import PizzaList from "../../components/pizzaList";
import Pizza from "../../models/pizza";
//import { mockDataPizza } from "../../data/MockData";
import PizzaService from "../../services/PizzaService";
import { useEffect, useState } from "react";

const Menu = () => {
  const [pizzaL, setPizzaL] = useState<Pizza[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pizzas = await PizzaService.getAll();
        setPizzaL(pizzas);
      } catch (error) {
        // Gérer les erreurs de récupération des données
        console.error("Erreur lors de la récupération des pizzas:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <PizzaList pizzas={pizzaL} />
    </div>
  );
};

export default Menu;
