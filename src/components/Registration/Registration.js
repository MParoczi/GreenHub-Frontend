import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Paper, Typography, CircularProgress } from "@material-ui/core";
import { useStyle } from "./registrationStyle";
import RegistrationForm from "./RegistrationForm";
import RegistrationGuide from "./RegistrationGuide";
import {
  loadCountries,
  registerUser
} from "../../redux/actions/registrationActions";
import formIsValid from "./userInputValidation";
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

  const handleSubmit = event => {
    event.preventDefault();
    if (!formIsValid(user, countries, setErrors)) return;
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
