import { makeStyles } from "@material-ui/core";

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
  profilePicture: {
    marginLeft: "auto",
    marginRight: "auto",
    cursor: "pointer",
    "&:hover": {
      opacity: "90%"
    },
    [theme.breakpoints.up("xs")]: {
      width: "150px",
      height: "150px"
    },
    [theme.breakpoints.up("sm")]: {
      width: "200px",
      height: "200px"
    },
    [theme.breakpoints.up("lg")]: {
      width: "250px",
      height: "250px"
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
  },
  modal: {
    [theme.breakpoints.up("xs")]: {
      display: "block"
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    },
    overflow: "scroll",
    alignItems: "center",
    justifyContent: "center"
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
  input: {
    display: "none"
  },
  button: {
    backgroundColor: "#383e42",
    color: "#0BDA51",
    "&:hover": {
      background: "#676D72"
    }
  }
}));
