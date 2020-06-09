import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SentimentDissatisfiedTwoToneIcon from "@material-ui/icons/SentimentDissatisfiedTwoTone";
import { useStyle } from "./pageNotFoundStyle";

function PageNotFound() {
  const classes = useStyle();

  return (
    <Grid container spacing={0} justify={"center"}>
      <Grid item xs={11} md={10} lg={9} className={classes.row}>
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.text}>
            Apologies, but we did not find the page you are looking for...
          </Typography>
          <SentimentDissatisfiedTwoToneIcon className={classes.icon} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default PageNotFound;
