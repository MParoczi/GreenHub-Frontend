import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import defaultProfilePic from "../../images/default_profile.png";

function UserThumbnail({ user }) {
  const history = useHistory();

  const redirect = () => {
    history.push(`/profile/${user.id}`);
  };

  return (
    <Chip
      variant="outlined"
      label={`${user.firstName} ${user.lastName}`}
      onClick={redirect}
      avatar={
        <Avatar
          src={user.profilePicture ? user.profilePicture : defaultProfilePic}
        />
      }
    />
  );
}

UserThumbnail.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserThumbnail;
