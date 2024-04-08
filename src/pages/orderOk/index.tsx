import { useTranslation } from "react-i18next";
import "./style.css";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { DeliveryDining } from "@mui/icons-material";

const OrderOk = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Box id="ok">
        <Typography textAlign={"center"} fontSize={"larger"} className="typo">
          {t("order.prepare")}
        </Typography>
        <Typography textAlign={"center"} fontSize={"larger"} className="typo">
          {t("order.delivery")}
        </Typography>
        <DeliveryDining fontSize="large" id="scooter" />
        <Link to={"/menu"} color={"#fbc02c"} className="lien">
          {t("common.newOrder")}
        </Link>
      </Box>
    </div>
  );
};

export default OrderOk;
