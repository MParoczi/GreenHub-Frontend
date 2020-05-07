import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles(() => ({
  root: { minHeight: "100%", position: "relative" },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60px",
    background: "#6cf"
  }
}));
