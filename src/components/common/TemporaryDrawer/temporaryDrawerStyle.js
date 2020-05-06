import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles(theme => ({
  menuIcon: {
    color: "#0BDA51",
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
  list: { width: 250 },
  fullList: { width: "auto" },
  drawer: { background: "#383e42" },
  text: { color: "#0BDA51" },
  icon: { color: "#FFDB83" }
}));
