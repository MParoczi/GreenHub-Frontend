import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { useStyle } from "../common/style/mainStyle";
import { useSelector } from "react-redux";
import defaultProfilePic from "../../images/default_profile.png";
import ImageUpload from "./ImageUpload/ImageUpload";
import { CloudinaryContext } from "cloudinary-react";

function Profile() {
  const classes = useStyle();
  const user = useSelector(state => state.loggedInUser);

  return (
    <Grid container spacing={2} justify="space-evenly">
      <Grid item xs={11} md={4} className={classes.row}>
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.title}>My profile</Typography>
          <Avatar
            alt="profile-pic"
            src={user.picture ? user.picture : defaultProfilePic}
            className={classes.profilePicture}
          />
          <CloudinaryContext>
            <ImageUpload />
          </CloudinaryContext>
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
