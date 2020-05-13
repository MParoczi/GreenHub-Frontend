import React from "react";
import { TextField, Button, Box, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import Password from "../common/Password/Password";

function RegistrationForm({ handleSubmit, handleChange, errors, classes }) {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1} justify="center">
        <Grid item xs={12} lg={6}>
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
        </Grid>
        <Grid item xs={12} lg={6}>
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
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            label="Email"
            error={errors.email !== undefined}
            id="email-input"
            helperText={errors.email}
            variant="outlined"
            onChange={handleChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Password
            handleChange={handleChange}
            errors={errors}
            name={"password"}
            error={errors.password !== undefined}
            errorMessage={errors.password || ""}
            classes={classes}
          />
        </Grid>
      </Grid>
      <Box>
        <input id="register-user" type="submit" className={classes.input} />
        <label htmlFor="register-user">
          <Button
            variant="contained"
            className={classes.button}
            component="span"
          >
            Register
          </Button>
        </label>
      </Box>
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
