import { Box, Chip, Typography } from "@mui/material";
import Pizza from "../../models/pizza";
import "./style.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";

interface Props {
  pizza: Pizza;
  updateTotalPrice: (price: number) => void;
}

const PizzaCard = ({ pizza, updateTotalPrice }: Props) => {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState<number>(0);

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      updateTotalPrice(-pizza.price);
    }
    console.log(quantity - 1);
  };
  const handleAdd = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      updateTotalPrice(pizza.price);
    }
  };

  return (
    <Box display="flex" gap="20px" margin="20px">
      <img src={`/assets/${pizza.image}`} alt={pizza.name} height="150rem" />
      <Box className="texte">
        <Typography variant="h3">{pizza.name}</Typography>
        <Typography variant="body1">{pizza.description}</Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap="5px">
        <Chip
          label={pizza.price.toFixed(2) + " €"}
          color="success"
          size="medium"
        />
        <Box display="flex" alignItems="center" gap="5px">
          <Typography variant="body1">{t("common.quantity")}</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="5px"
          >
            <RemoveCircleOutline onClick={handleRemove} />
            <Typography variant="body2" style={{ fontSize: "25px" }}>
              {quantity}
            </Typography>
            <AddCircleOutline onClick={handleAdd} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PizzaCard;
