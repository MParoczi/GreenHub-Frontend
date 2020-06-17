import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import reactLogo from "../../images/react.png";
import reduxLogo from "../../images/redux.png";
import materialLogo from "../../images/material_ui.png";
import { useStyle } from "./aboutStyle";

function About() {
  const classes = useStyle();

  return (
    <Grid container spacing={0} justify="center">
      <Grid item xs={11} md={10} lg={9} className={classes.row}>
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
      <Grid item xs={11} md={10} lg={9} className={classes.row}>
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
