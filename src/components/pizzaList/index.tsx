import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Pizza from "../../models/pizza";
import PizzaCard from "../pizzaCard";
import "./style.css";
import { ShoppingCartCheckout } from "@mui/icons-material";

interface Props {
  pizzas: Pizza[];
}

const PizzaList = ({ pizzas }: Props) => {
  const { t } = useTranslation();

  return (
    <Box marginTop="110px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        margin="30px"
      >
        <Typography className="select">{t("common.select")}</Typography>
        <Box display="flex" justifyContent="end" gap="15px">
          <Typography className="total">
            {t("common.total") + ": 10.50" + " €"}
          </Typography>
          <ShoppingCartCheckout fontSize="large" />
        </Box>
      </Box>

      <Box>
        {pizzas.map((pizza: Pizza) => (
          <PizzaCard pizza={pizza} />
        ))}
      </Box>
    </Box>
  );
};

export default PizzaList;
