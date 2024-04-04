import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Pizza from "../../models/pizza";
import PizzaCard from "../pizzaCard";

interface Props {
  pizzas: Pizza[];
}

const PizzaList = ({ pizzas }: Props) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography>{t("common.select")}</Typography>
      <Box>
        {pizzas.map((pizza: Pizza) => (
          <PizzaCard pizza={pizza} />
        ))}
      </Box>
    </Box>
  );
};

export default PizzaList;
