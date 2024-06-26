import { Box, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Pizza from "../../models/pizza";
import PizzaCard from "../pizzaCard";
import "./style.css";
import { ShoppingCartCheckout } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useState } from "react";

interface Props {
  pizzas: Pizza[];
}

const PizzaList = ({ pizzas }: Props) => {
  const { t } = useTranslation();
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderLines, setOrderLines] = useState<any[]>([]);

  const updateTotalPrice = (price: number) => {
    setTotalPrice(totalPrice + price);
  };

  const updateOrderLine = (pizzaId: number, quantity: number) => {
    setOrderLines((prevOrderLines) => ({
      ...prevOrderLines,
      [pizzaId]: quantity,
    }));
  };
  /*
  const newOrder = (userId: string, orderLines: any[]) => {
    return {
      userId: userId,
      orderLines: orderLines,
    };
  };
  */
  //const order = newOrder(userId, orderLines);

  return (
    <Box marginTop="110px">
      <Box className="top">
        <Typography className="select" variant="h2">
          {t("common.select")}
        </Typography>
        <Box display="flex" justifyContent="end" gap="15px" alignItems="center">
          <Typography className="total">
            {t("order.total")} : {totalPrice.toFixed(2)} €
          </Typography>
          <IconButton
            aria-label={t("order.validate")}
            disabled={totalPrice === 0}
          >
            <NavLink to="/ok" aria-label={t("order.validate")}>
              <ShoppingCartCheckout fontSize="large" />
            </NavLink>
          </IconButton>
        </Box>
      </Box>

      <Box className="list">
        {pizzas?.map((pizza: Pizza) => (
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
            updateTotalPrice={updateTotalPrice}
            updateOrderLine={updateOrderLine}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PizzaList;
