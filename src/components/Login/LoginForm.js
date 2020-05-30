import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
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
      <Box>
        <input id="login-user" type="submit" className={classes.input} />
        <label htmlFor="login-user">
          <Button
            variant="contained"
            className={classes.button}
            component="span"
          >
            Login
          </Button>
        </label>
      </Box>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default LoginForm;
