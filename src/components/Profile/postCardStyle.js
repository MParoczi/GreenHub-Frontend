import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(theme => ({
  card: {
    marginBottom: "20px",
    backgroundColor: "#FFDB83"
  },
  header: {
    textAlign: "left",
    backgroundColor: "#383e42",
    borderRadius: "4px",
    marginBottom: "25px"
  },
  title: {
    color: "#0BDA51",
    fontWeight: "bold",
    [theme.breakpoints.up("xs")]: {
      fontSize: "20px"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "25px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "30px"
    }
  },
  date: {
    color: "#0BDA51",
    [theme.breakpoints.up("xs")]: {
      fontSize: "10px"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "12px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14px"
    }
  },
  content: {
    textAlign: "left",
    color: "#383e42"
  }
}));
