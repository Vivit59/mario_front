import { useTranslation } from "react-i18next";
import PizzaList from "../../components/pizzaList";
import Pizza from "../../models/pizza";
//import { mockDataPizza } from "../../data/MockData";
import PizzaService from "../../services/PizzaService";
import { useEffect, useState } from "react";

const Menu = () => {
  const { t } = useTranslation();
  const [pizzaL, setPizzaL] = useState<Pizza[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pizzas = await PizzaService.getAll();
        setPizzaL(pizzas);
      } catch (error) {
        console.error(t("error.recover"), error);
      }
    };
    fetchData();
  }, [t]);

  return (
    <div>
      <PizzaList pizzas={pizzaL} />
    </div>
  );
};

export default Menu;
