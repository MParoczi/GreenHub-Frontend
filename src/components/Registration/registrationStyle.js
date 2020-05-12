import { makeStyles } from "@material-ui/core/styles";

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
