import React from "react";
import Viewer from "react-viewer";
import defaultProfilePic from "../../images/default_profile.png";
import PropTypes from "prop-types";

function ProfilePictureViewer({ user, visible, closePicture }) {
  return (
    <Viewer
      visible={visible}
      onClose={closePicture}
      images={[
        {
          src: user.profilePicture ? user.profilePicture : defaultProfilePic,
          alt: `Profile picture of ${user.firstName}`
        }
      ]}
      drag={false}
      noFooter={true}
      disableMouseZoom={true}
    />
  );
}

ProfilePictureViewer.propTypes = {
  user: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  closePicture: PropTypes.func.isRequired
};

export default ProfilePictureViewer;
