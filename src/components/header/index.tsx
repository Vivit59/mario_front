import { AppBar, Box, Typography } from "@mui/material";
import "./style.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="fixed" sx={{ top: 0, bottom: "auto" }} className="appBar">
      <Box display="flex" alignItems="center" justifyContent="center">
        <img
          src="/assets/logo.png"
          alt="logo icon"
          height="80em"
          className="logo"
        />
        <Typography variant="h1">{t("common.title")}</Typography>
      </Box>
    </AppBar>
  );
};

export default Header;
