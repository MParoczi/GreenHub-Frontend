import React from "react";
import { TextField, Button } from "@material-ui/core";
import PropTypes from "prop-types";

function RegistrationForm({ handleSubmit, handleChange, errors, classes }) {
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
        className={classes.textField}
      />
      <TextField
        name="lastName"
        label="Last name"
        error={errors.lastName !== undefined}
        id="last-name-input"
        helperText={errors.lastName}
        variant="outlined"
        onChange={handleChange}
        className={classes.textField}
      />
      <input id="register-user" type="submit" className={classes.input} />
      <label htmlFor="register-user">
        <Button variant="contained" className={classes.button} component="span">
          Register
        </Button>
      </label>
    </form>
  );
}

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default RegistrationForm;
