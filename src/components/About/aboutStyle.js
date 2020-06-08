import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles(theme => ({
  paper: {
    padding: "5%",
    width: "auto",
    textAlign: "center"
  },
  title: {
    fontFamily: "Fredericka the Great",
    color: "#0BDA51",
    [theme.breakpoints.up("xs")]: {
      fontSize: "50px"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "75px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "100px"
    }
  },
  motto: {
    color: "#383e42",
    fontStyle: "italic",
    [theme.breakpoints.up("xs")]: {
      fontSize: "20px"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "40px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "50px"
    }
  },
  text: {
    color: "#383e42",
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
  row: {
    marginBottom: "5%"
  },
  logo: {
    [theme.breakpoints.up("xs")]: {
      width: "60px",
      height: "auto"
    },
    [theme.breakpoints.up("sm")]: {
      width: "150px",
      height: "auto"
    },
    [theme.breakpoints.up("lg")]: {
      width: "250px",
      height: "auto"
    }
  },
  logos: {
    padding: "5%",
    width: "auto",
    display: "flex",
    justifyContent: "space-evenly"
  }
}));
