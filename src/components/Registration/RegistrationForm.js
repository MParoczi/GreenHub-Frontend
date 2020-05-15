import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
  TextField,
  Button,
  Box,
  Grid,
  FormHelperText,
  FormControl
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import PropTypes from "prop-types";
import Password from "../common/Password/Password";
import { defaultMaterialTheme } from "./registrationStyle";

function RegistrationForm({
  handleSubmit,
  handleChange,
  errors,
  classes,
  user
}) {
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
            label={"Password"}
            handleChange={handleChange}
            errors={errors}
            name={"password"}
            error={errors.password !== undefined}
            errorMessage={errors.password || ""}
            classes={classes}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Password
            label={"Confirm password"}
            handleChange={handleChange}
            errors={errors}
            name={"confirmedPassword"}
            error={errors.confirmedPassword !== undefined}
            errorMessage={errors.confirmedPassword || ""}
            classes={classes}
          />
        </Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={defaultMaterialTheme}>
            <FormControl className={classes.textField}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  autoOk
                  error={errors.birthDate}
                  variant="dialog"
                  inputVariant="outlined"
                  label="Birth date"
                  format="dd/MM/yyyy"
                  maxDate={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear() - 14)
                    )
                  }
                  maxDateMessage={""}
                  value={user.birthDate}
                  InputAdornmentProps={{ position: "start" }}
                  onChange={date =>
                    handleChange({ target: { name: "birthDate", value: date } })
                  }
                />
              </MuiPickersUtilsProvider>
              <FormHelperText error={errors.birthDate !== undefined}>
                {errors.birthDate}
              </FormHelperText>
            </FormControl>
          </ThemeProvider>
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
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default RegistrationForm;