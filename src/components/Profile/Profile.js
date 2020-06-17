import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { useStyle } from "../common/style/mainStyle";
import { useSelector } from "react-redux";
import defaultProfilePic from "../../images/default_profile.png";
import ImageUpload from "./ImageUpload/ImageUpload";
import UserDetails from "./UserDetails";
import ProfilePictureViewer from "./ProfilePictureViewer";

function Profile() {
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
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.title}>My profile</Typography>
          <Avatar
            alt="profile-pic"
            src={user.profilePicture ? user.profilePicture : defaultProfilePic}
            classes={{ root: classes.profilePicture }}
            onClick={openPicture}
          />
          <ImageUpload />
          <UserDetails classes={classes} user={user} />
          <ProfilePictureViewer
            user={user}
            closePicture={closePicture}
            visible={visible}
          />
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
