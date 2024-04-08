import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Pizza from "../../models/pizza";

interface Props {
  pizza: Pizza;
}

const Cart = () => {
  const { t } = useTranslation();
  const [cart, setCart] = useState(0);
  const total: number = 0;
  return (
    <div>
      <Typography className="total">
        {t("common.total") + { total } + " €"}
      </Typography>
    </div>
  );
};

export default Cart;
