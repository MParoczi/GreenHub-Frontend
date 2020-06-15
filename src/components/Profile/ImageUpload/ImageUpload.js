import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import { openUploadWidget } from "./CloudinaryService";

function ImageUpload() {
  const options = {
    cloudName: "dqqo1y0xo",
    uploadPreset: "h7rcdcwe",
    multiple: false,
    cropping: true,
    croppingAspectRatio: 1,
    folder: "profile_pictures",
    tags: ["profile_picture"],
    resourceType: "image",
    clientAllowedFormats: ["png", "gif", "jpeg"],
    styles: {
      palette: {
        window: "#383E42",
        windowBorder: "#0BDA51",
        tabIcon: "#0BDA51",
        menuIcons: "#FFDB83",
        textDark: "#000000",
        textLight: "#FFFFFF",
        link: "#0BDA51",
        action: "#FF620C",
        inactiveTabIcon: "#FFDB83",
        error: "#F44235",
        inProgress: "#0078FF",
        complete: "#20B832",
        sourceBg: "#FFDB83"
      }
    }
  };

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
