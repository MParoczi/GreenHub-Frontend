import { makeStyles, createMuiTheme } from "@material-ui/core";

export const useStyle = makeStyles(theme => ({
  paper: {
    padding: "5%",
    width: "auto",
    textAlign: "center"
  },
  row: {
    marginBottom: "5%"
  },
  title: {
    fontFamily: "Fredericka the Great",
    color: "#0BDA51",
    [theme.breakpoints.up("xs")]: {
      fontSize: "25px"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "50px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "75px"
    }
  },
  input: {
    display: "none"
  },
  button: {
    backgroundColor: "#383e42",
    color: "#0BDA51",
    "&:hover": {
      background: "#676D72"
    }
  },
  textField: {
    marginBottom: "10px",
    width: "100%",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#383e42"
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#0BDA51"
    },
    "& .MuiFormLabel-root.Mui-error": {
      color: "#FF005D"
    }
  }
}));

export const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#383e42"
    }
  },
  overrides: {
    MuiPickersDay: {
      day: {
        color: "#0BDA51"
      },
      dayDisabled: {
        color: "#123617"
      }
    }
  }
});
