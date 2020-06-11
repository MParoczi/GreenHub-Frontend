import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useStyle } from "../common/style/mainStyle";

function Profile() {
  const classes = useStyle();

  return (
    <Grid container spacing={2} justify="space-evenly">
      <Grid item xs={11} md={4} className={classes.row}>
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.title}>My profile</Typography>
        </Paper>
      </Grid>
      <Grid item xs={11} md={6} className={classes.row}>
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.title}>My posts</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Profile;
