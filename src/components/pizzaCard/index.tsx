import { Box, Chip, InputLabel, TextField, Typography } from "@mui/material";
import Pizza from "../../models/pizza";
import "./style.css";
import { useTranslation } from "react-i18next";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";

interface Props {
  pizza: Pizza;
}

const PizzaCard = ({ pizza }: Props) => {
  const { t } = useTranslation();

  return (
    <Box display="flex" gap="20px" margin="20px">
      <img src={pizza.image} alt={pizza.name} height="150rem" />
      <Box className="texte">
        <Typography variant="h3">{pizza.name}</Typography>
        <Typography variant="h4">{pizza.description}</Typography>
      </Box>
      <Box>
        <Chip label={pizza.price + " €"} color="success" size="medium" />
        <Box display="flex" alignItems="center" gap="5px">
          <InputLabel>{t("common.quantity")}</InputLabel>

          <NumberInput
            id="r31"
            slots={{
              root: "div",
              incrementButton: AddCircleOutline,
              decrementButton: RemoveCircleOutline,
            }}
            min={0}
            max={10}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PizzaCard;
