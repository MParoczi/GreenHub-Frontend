import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import defaultProfilePic from "../../images/default_profile.png";

function UserThumbnail({ user }) {
  return (
    <Link to={`/profile/${user.id}`}>
      <Chip
        variant="outlined"
        label={`${user.firstName} ${user.lastName}`}
        avatar={
          <Avatar
            src={user.profilePicture ? user.profilePicture : defaultProfilePic}
          />
        }
      />
    </Link>
  );
}

UserThumbnail.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserThumbnail;
