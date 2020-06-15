import React from "react";
import { CloudinaryContext } from "cloudinary-react";
import PropTypes from "prop-types";

function ImageUpload({ cloudName, uploadPreset }) {
  return (
    <CloudinaryContext
      cloudName={cloudName}
      uploadPreset={uploadPreset}
    ></CloudinaryContext>
  );
}

ImageUpload.prototype = {
  cloudName: PropTypes.string.isRequired,
  uploadPreset: PropTypes.string.isRequired
};

export default ImageUpload;
