import { Box, Typography } from "@mui/material";
import Pizza from "../../models/pizza";

interface Props {
  pizza: Pizza;
}

const PizzaCard = ({ pizza }: Props) => {
  return (
    <Box>
      <img src={pizza.image} alt={pizza.name} />
      <Typography variant="h3">{pizza.name}</Typography>
      <Typography variant="h4">{pizza.description}</Typography>
      <Typography>{pizza.price} €</Typography>
    </Box>
  );
};

export default PizzaCard;
