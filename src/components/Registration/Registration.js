import React, { useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useStyle } from "./registrationStyle";
import { validateFirstName } from "./userInputValidation";
import RegistrationForm from "./RegistrationForm";

function Registration() {
  const classes = useStyle();
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  const formIsValid = () => {
    const { firstName } = user;
    const errors = {};

    const firstNameIsValid = validateFirstName(firstName);

    if (firstNameIsValid !== true) errors.firstName = firstNameIsValid;

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!formIsValid()) return;
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Grid container spacing={0} justify="center">
      <Grid item xs={7} className={classes.row}>
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.title}>Registration</Typography>
          <RegistrationForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            errors={errors}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Registration;
