import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./style.css";
import { Link } from "react-router-dom";

interface Props {
  setIsAuthenticated: Function;
}

const Congrats = ({ setIsAuthenticated }: Props) => {
  const { t } = useTranslation();
  const handleClick = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <Box id="ok">
        <Typography textAlign={"center"} fontSize={"larger"} className="typo">
          {t("common.congrats")} !
        </Typography>
        <Typography textAlign={"center"} fontSize={"larger"} className="typo">
          {t("common.okToOrder")}
        </Typography>

        <Link
          to={"/menu"}
          color={"#fbc02c"}
          className="lien"
          onClick={handleClick}
        >
          {t("common.firstOrder")}
        </Link>
      </Box>
    </div>
  );
};

export default Congrats;
