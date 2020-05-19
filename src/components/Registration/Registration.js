import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Paper, Typography, CircularProgress } from "@material-ui/core";
import { useStyle } from "./registrationStyle";
import {
  validateEmail,
  validateName,
  validatePassword,
  confirmPassword,
  validateBirthDate,
  validateCountry
} from "./userInputValidation";
import RegistrationForm from "./RegistrationForm";
import RegistrationGuide from "./RegistrationGuide";
import {
  loadCountries,
  registerUser
} from "../../redux/actions/registrationActions";
import formatToBasicDate from "../../../utils/dateFormatter";

function Registration() {
  const classes = useStyle();

  const [user, setUser] = useState({
    birthDate: new Date(new Date().setFullYear(new Date().getFullYear() - 14))
  });
  const [errors, setErrors] = useState({});

  const countries = useSelector(state => state.countries);
  const loading = useSelector(state => state.apiCallsInProgress);

  const dispatch = useDispatch();

  const formIsValid = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmedPassword,
      birthDate,
      country
    } = user;
    const errors = {};

    const firstNameIsValid = validateName(firstName);
    const lastNameIsValid = validateName(lastName);
    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);
    const passwordIsConfirmed = confirmPassword(password, confirmedPassword);
    const birthDateIsValid = validateBirthDate(birthDate);
    const countryIsValid = validateCountry(country, countries);

    if (firstNameIsValid !== true) errors.firstName = firstNameIsValid;
    if (lastNameIsValid !== true) errors.lastName = lastNameIsValid;
    if (emailIsValid !== true) errors.email = emailIsValid;
    if (passwordIsValid !== true) errors.password = passwordIsValid;
    if (passwordIsConfirmed !== true)
      errors.confirmedPassword = passwordIsConfirmed;
    if (birthDateIsValid !== true) errors.birthDate = birthDateIsValid;
    if (countryIsValid !== true) errors.country = countryIsValid;

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!formIsValid()) return;
    setUser(prevState => ({
      ...prevState,
      birthDate: formatToBasicDate(prevState.birthDate)
    }));
    dispatch(registerUser(user));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(loadCountries());
    }
  }, []);

  return (
    <Grid container spacing={0} justify="center">
      <Grid item xs={7} className={classes.row}>
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.title}>Registration</Typography>
          {loading ? (
            <CircularProgress />
          ) : (
            <RegistrationForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              user={user}
              countries={countries}
              errors={errors}
              classes={classes}
            />
          )}
          <RegistrationGuide />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Registration;
