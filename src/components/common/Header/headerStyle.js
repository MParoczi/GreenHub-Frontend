import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  toolbar: {
    background: "#383e42",
    justifyContent: "space-between"
  },
  logo: {
    [theme.breakpoints.up("xs")]: {
      width: "75px",
      height: "75px"
    },
    [theme.breakpoints.up("sm")]: {
      width: "100px",
      height: "100px"
    },
    [theme.breakpoints.up("lg")]: {
      width: "125px",
      height: "125px"
    }
  },
  title: {
    fontFamily: "Fredericka the Great",
    fontSize: "50px",
    color: "\t#0BDA51"
  }
}));
