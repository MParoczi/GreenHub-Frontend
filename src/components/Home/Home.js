import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useStyle } from "./homeStyle";

function Home() {
  const classes = useStyle();

  return (
    <Grid container spacing={0} justify="center">
      <Grid item xs={11} md={10} lg={9} className={classes.row}>
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.title}>Home Page</Typography>
          Under development
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
