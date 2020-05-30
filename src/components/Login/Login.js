import React, { useState } from "react";
import { CircularProgress, Grid, Paper, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import {
  defaultMaterialTheme,
  useStyle
} from "../common/style/registrationLoginStyle";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";

function Login() {
  const [errors, setErrors] = useState({});
  const loading = useSelector(state => state.apiCallsInProgress);
  const classes = useStyle();

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
            <LoginForm classes={classes} errors={errors} />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Login;
