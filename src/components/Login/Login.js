import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/styles";
import {
  defaultMaterialTheme,
  useStyle
} from "../common/registrationLoginCommon/registrationLoginStyle";
import LoginForm from "./LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginFormIsValid } from "../common/registrationLoginCommon/userInputValidation";
import { loginUser } from "../../redux/actions/loginActions";
import { toast } from "react-toastify";

function Login() {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});
  const loading = useSelector(state => state.apiCallsInProgress);
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    if (!loginFormIsValid(user, setErrors)) return;
    dispatch(loginUser(user))
      .then(response => {
        toast.success(response.loggedInUser.message);
        history.push("/");
      })
      .catch(response => {
        toast.error(response.message);
      });
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
          <Typography className={classes.title}>Login</Typography>
          {loading ? (
            <ThemeProvider theme={defaultMaterialTheme}>
              <CircularProgress color="secondary" />
            </ThemeProvider>
          ) : (
            <LoginForm
              classes={classes}
              errors={errors}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          )}
          <Link to="/registration">
            <span className={classes.registrationRedirect}>
              Haven`t got an account yet? Register here!
            </span>
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Login;
