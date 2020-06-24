import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Profile from "./Profile";
import Posts from "./Posts";
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
        <Posts classes={classes} />
      </Grid>
    </Grid>
  );
}

export default ProfilePage;
