import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles(theme => ({
  text: {
    color: "#383e42",
    [theme.breakpoints.up("xs")]: {
      fontSize: "30px"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "40px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "50px"
    }
  },
  paper: {
    marginTop: "10%",
    padding: "5%",
    width: "100%",
    textAlign: "center"
  },
  icon: {
    color: "#383e42",
    [theme.breakpoints.up("xs")]: {
      fontSize: "100px"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "150px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "200px"
    }
  }
}));
