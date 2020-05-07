import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles(theme => ({
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    opacity: "60%",
    textAlign: "center",
    [theme.breakpoints.up("xs")]: {
      height: "30px",
      fontSize: "8px"
    },
    [theme.breakpoints.up("sm")]: {
      height: "40px",
      fontSize: "10px"
    },
    [theme.breakpoints.up("lg")]: {
      height: "50px",
      fontSize: "12px"
    }
  }
}));
