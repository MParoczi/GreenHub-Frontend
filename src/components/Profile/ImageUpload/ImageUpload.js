import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import { openUploadWidget } from "./CloudinaryService";

function ImageUpload() {
  const options = { cloudName: "dqqo1y0xo", uploadPreset: "h7rcdcwe" };

  const handleUpload = (error, photo) => {
    if (!error) {
      if (photo.event === "success") {
        console.log(photo);
      }
    } else {
      console.log(error);
    }
  };

  const uploadImage = () => {
    openUploadWidget(options, handleUpload);
  };

  return (
    <Tooltip title="Edit profile picture">
      <IconButton onClick={uploadImage}>
        <EditTwoToneIcon />
      </IconButton>
    </Tooltip>
  );
}

export default ImageUpload;
