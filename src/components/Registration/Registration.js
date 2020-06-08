import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  defaultMaterialTheme,
  useStyle
} from "../common/registrationLoginCommon/registrationLoginStyle";
import RegistrationForm from "./RegistrationForm";
import RegistrationGuide from "./RegistrationGuide";
import { loadCountries, registerUser } from "../../redux/actions/userActions";
import { registrationFormIsValid } from "../common/registrationLoginCommon/userInputValidation";
import formatToBasicDate from "../../../utils/dateFormatter";
import { toast } from "react-toastify";
import { ThemeProvider } from "@material-ui/styles";

function Registration() {
  const classes = useStyle();

  const [user, setUser] = useState({
    birthDate: new Date(new Date().setFullYear(new Date().getFullYear() - 14))
  });
  const [errors, setErrors] = useState({});

  const countries = useSelector(state => state.countries);
  const loading = useSelector(state => state.apiCallsInProgress);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    if (!registrationFormIsValid(user, countries, setErrors)) return;
    const birthDate = formatToBasicDate(user.birthDate);

    dispatch(registerUser({ ...user, birthDate: birthDate }))
      .then(response => {
        toast.success(response.registeredUser.message);
        history.push("/");
      })
      .catch(response => {
        toast.error(response.message);
        history.push("/");
      });
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
            <ThemeProvider theme={defaultMaterialTheme}>
              <CircularProgress color="secondary" />
            </ThemeProvider>
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
