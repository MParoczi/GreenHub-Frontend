import React from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";

function RegistrationForm({ handleSubmit, handleChange, errors }) {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="firstName"
        label="First name"
        error={errors.firstName !== undefined}
        id="first-name-input"
        helperText={errors.firstName}
        variant="outlined"
        onChange={handleChange}
      />
    </form>
  );
}

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default RegistrationForm;
