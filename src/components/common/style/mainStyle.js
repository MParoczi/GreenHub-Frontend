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
  },
  registrationRedirect: {
    cursor: "pointer",
    color: "#383e42",
    "&:hover": {
      color: "#676D72"
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "8px"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "9px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "10px"
    }
  },
  profilePicture: {
    marginLeft: "auto",
    marginRight: "auto",
    cursor: "pointer",
    [theme.breakpoints.up("xs")]: {
      width: theme.spacing(10),
      height: theme.spacing(10)
    },
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(20),
      height: theme.spacing(20)
    },
    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(30),
      height: theme.spacing(30)
    },
    "&:hover": {
      opacity: "90%"
    }
  },
  details: {
    color: "#383e42",
    marginBottom: "10px",
    [theme.breakpoints.up("xs")]: {
      fontSize: "15px"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "25px"
    }
  }
}));

export const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#383e42"
    },
    secondary: {
      main: "#0BDA51"
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
