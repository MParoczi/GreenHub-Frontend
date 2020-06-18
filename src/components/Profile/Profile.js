import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import defaultProfilePic from "../../images/default_profile.png";
import ImageUpload from "./ImageUpload/ImageUpload";
import UserDetails from "./UserDetails";
import ProfilePictureViewer from "./ProfilePictureViewer";
import PropTypes from "prop-types";

function Profile({ user, openPicture, closePicture, visible, classes }) {
  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography className={classes.title}>My profile</Typography>
      <Avatar
        alt="profile-pic"
        src={user.profilePicture ? user.profilePicture : defaultProfilePic}
        className={classes.profilePicture}
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
  );
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  openPicture: PropTypes.func.isRequired,
  closePicture: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
};

export default Profile;
