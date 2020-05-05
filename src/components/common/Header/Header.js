import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useStyle } from "./headerStyle";
import logo from "../../../../public/images/logo.png";

function Header() {
  const classes = useStyle();

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img src={logo} alt="legato-logo" className={classes.logo} />
          <Typography className={classes.title}>Legato</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
