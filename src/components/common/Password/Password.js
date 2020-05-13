import React, { useState } from "react";
import {
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  FormHelperText
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import PropTypes from "prop-types";

function Password({ handleChange, error, errorMessage, name, classes, label }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl variant="outlined" className={classes.textField}>
      <InputLabel htmlFor="outlined-adornment-password" error={error}>
        {label}
      </InputLabel>
      <OutlinedInput
        name={name}
        label={label}
        id={name}
        type={showPassword ? "text" : "password"}
        onChange={handleChange}
        error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText error={error}>{errorMessage}</FormHelperText>
    </FormControl>
  );
}

Password.propTypes = {
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};

export default Password;
