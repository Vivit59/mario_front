import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./style.css";
import { Link } from "react-router-dom";

const Congrats = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Box id="ok">
        <Typography textAlign={"center"} fontSize={"larger"} className="typo">
          {t("common.congrats")} !
        </Typography>
        <Typography textAlign={"center"} fontSize={"larger"} className="typo">
          {t("common.okToOrder")}
        </Typography>

        <Link to={"/menu"} color={"#fbc02c"} className="lien">
          {t("common.firstOrder")}
        </Link>
      </Box>
    </div>
  );
};

export default Congrats;
