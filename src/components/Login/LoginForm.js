import React from "react";
import { Grid, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import Password from "../common/Password/Password";

function LoginForm({ handleSubmit, handleChange, errors, classes }) {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1} justify="center">
        <Grid item xs={12} lg={6}>
          <TextField
            name="email"
            label="Email"
            id="email-input"
            helperText={errors.email}
            variant="outlined"
            onChange={handleChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Password
            label={"Password"}
            handleChange={handleChange}
            errors={errors}
            name={"password"}
            error={errors.password !== undefined}
            errorMessage={errors.password || ""}
            classes={classes}
          />
        </Grid>
      </Grid>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  errors: PropTypes.object,
  classes: PropTypes.object
};

export default LoginForm;
