import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Viewer from "react-viewer";
import { useStyle } from "../common/style/mainStyle";
import { useSelector } from "react-redux";
import defaultProfilePic from "../../images/default_profile.png";
import ImageUpload from "./ImageUpload/ImageUpload";

function Profile() {
  const classes = useStyle();
  const user = useSelector(state => state.loggedInUser);
  const [visible, setVisible] = useState(false);

  return (
    <Grid container spacing={0} justify="space-evenly">
      <Grid item xs={11} md={4} className={classes.row}>
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.title}>My profile</Typography>
          <Avatar
            alt="profile-pic"
            src={user.profilePicture ? user.profilePicture : defaultProfilePic}
            className={classes.profilePicture}
            onClick={() => {
              setVisible(true);
            }}
          />
          <ImageUpload />
          <Viewer
            visible={visible}
            onClose={() => {
              setVisible(false);
            }}
            images={[
              {
                src: user.profilePicture
                  ? user.profilePicture
                  : defaultProfilePic,
                alt: `Profile picture of ${user.firstName}`
              }
            ]}
            drag={false}
            noFooter={true}
            disableMouseZoom={true}
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
