import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useStyle } from "./headerStyle";
import logo from "../../../images/logo.png";
import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer";

function Header() {
  const classes = useStyle();

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <img src={logo} alt="legato-logo" className={classes.logo} />
          </Link>
          <Link to="/">
            <Typography className={classes.title}>Legato</Typography>
          </Link>
          <TemporaryDrawer />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
