import React, { useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useStyle } from "./registrationStyle";
import {
  validateEmail,
  validateName,
  validatePassword,
  confirmPassword,
  validateBirthDate
} from "./userInputValidation";
import RegistrationForm from "./RegistrationForm";

function Registration() {
  const classes = useStyle();
  const [user, setUser] = useState({
    birthDate: new Date(new Date().setFullYear(new Date().getFullYear() - 14))
  });
  const [errors, setErrors] = useState({});

  const formIsValid = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmedPassword,
      birthDate
    } = user;
    const errors = {};

    const firstNameIsValid = validateName(firstName);
    const lastNameIsValid = validateName(lastName);
    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);
    const passwordIsConfirmed = confirmPassword(password, confirmedPassword);
    const birthDateIsValid = validateBirthDate(birthDate);

    if (firstNameIsValid !== true) errors.firstName = firstNameIsValid;
    if (lastNameIsValid !== true) errors.lastName = lastNameIsValid;
    if (emailIsValid !== true) errors.email = emailIsValid;
    if (passwordIsValid !== true) errors.password = passwordIsValid;
    if (passwordIsConfirmed !== true)
      errors.confirmedPassword = passwordIsConfirmed;
    if (birthDateIsValid !== true) errors.birthDate = birthDateIsValid;

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
            classes={classes}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Registration;
