import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";

function ImageUpload(props) {
  return (
    <Tooltip title="Edit profile picture">
      <IconButton>
        <EditTwoToneIcon />
      </IconButton>
    </Tooltip>
  );
}

export default ImageUpload;
