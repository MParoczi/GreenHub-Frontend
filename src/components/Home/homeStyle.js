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
  }
}));
