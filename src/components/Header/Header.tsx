import { FC, Fragment } from "react";
import { HeaderProps } from "./Header.type";
import { AppBar, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";

export const Header: FC<HeaderProps> = ({ toggleSidebar }) => {
  const handleClick = () => {
    toggleSidebar((prevIsOpen: boolean) => !prevIsOpen);
  };

  return (
    <Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: "white",
          boxShadow: "0px 2px 2px whitesmoke",
        }}
      >
        <Toolbar
          sx={{
            color: "black",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          <IconButton onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <img src="/logo.svg" alt="logo" width={50}/>
          <Typography variant="subtitle1">AIR-Vin</Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};
