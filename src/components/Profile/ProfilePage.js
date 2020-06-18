import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { useStyle } from "./profilePageStyle";

function ProfilePage() {
  const classes = useStyle();
  const user = useSelector(state => state.loggedInUser);
  const [visible, setVisible] = useState(false);

  const openPicture = () => {
    setVisible(true);
  };

  const closePicture = () => {
    setVisible(false);
  };

  return (
    <Grid container spacing={0} justify="space-evenly">
      <Grid item xs={11} md={4} className={classes.row}>
        <Profile
          user={user}
          visible={visible}
          openPicture={openPicture}
          closePicture={closePicture}
          classes={classes}
        />
      </Grid>
      <Grid item xs={11} md={6} className={classes.row}>
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.title}>My posts</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ProfilePage;
