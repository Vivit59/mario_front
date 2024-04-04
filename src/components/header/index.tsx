import { AppBar, Box, Typography } from "@mui/material";
import "./style.css";

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ top: 0, bottom: "auto" }} className="appBar">
      <Box display="flex" alignItems="center" justifyContent="center">
        <img
          src="/assets/logo.png"
          alt="logo icon"
          height="80em"
          className="logo"
        />
        <Typography variant="h1">Chez Mario</Typography>
      </Box>
    </AppBar>
  );
};

export default Header;
