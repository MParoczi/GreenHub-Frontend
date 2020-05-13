import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useStyle } from "./aboutStyle";
import reactLogo from "../../../public/images/react.png";
import reduxLogo from "../../../public/images/redux.png";
import materialLogo from "../../../public/images/material_ui.png";

function About() {
  const classes = useStyle();

  return (
    <Grid container spacing={0} justify="center">
      <Grid item xs={8} className={classes.row}>
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.title}>Legato</Typography>
          <Typography className={classes.motto}>
            Music connects people
          </Typography>
          <Typography className={classes.text}>
            The Legato project aims to create a community space where registered
            users can find each other based on their music preferences. With
            Legato, we can meet people with whom we have a good chance of
            finding a common voice. As our motto holds: Music connects people
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={8} className={classes.row}>
        <Paper elevation={3} className={classes.logos}>
          <img src={reactLogo} alt="react-logo" className={classes.logo} />
          <img src={reduxLogo} alt="redux-logo" className={classes.logo} />
          <img
            src={materialLogo}
            alt="material-logo"
            className={classes.logo}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default About;
