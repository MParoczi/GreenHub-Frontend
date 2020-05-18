import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles(theme => ({
  modal: {
    display: "flex",
    overflow: "scroll",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #0BDA51",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: theme.spacing(0)
  },
  list: {
    width: "100%"
  },
  button: {
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
  }
}));
