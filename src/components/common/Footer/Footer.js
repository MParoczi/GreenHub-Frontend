import React from "react";
import Box from "@material-ui/core/Box";
import { useStyle } from "./footerStyle";

function Footer() {
  const classes = useStyle();

  return (
    <Box className={classes.footer}>Legato created by Mark Paroczi - 2020</Box>
  );
}

export default Footer;
