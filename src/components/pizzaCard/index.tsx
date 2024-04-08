import { Box, Chip, InputLabel, Typography } from "@mui/material";
import Pizza from "../../models/pizza";
import "./style.css";
import { useTranslation } from "react-i18next";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";
import QuantityInput from "../quantity";

interface Props {
  pizza: Pizza;
}

const PizzaCard = ({ pizza }: Props) => {
  const { t } = useTranslation();

  const StyledInputRoot = styled("div")(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  `
  );

  const StyledInput = styled("input")(
    ({ theme }) => `
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.375;
    border-radius: 8px;
    margin: 0 8px;
    padding: 10px 12px;
    outline: 0;
    min-width: 0;
    width: 4rem;
    text-align: center;
  
  
    &:focus-visible {
      outline: 0;
    }
  `
  );

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
          <QuantityInput />
        </Box>
      </Box>
    </Box>
  );
};

export default PizzaCard;
