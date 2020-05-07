import React from "react";
import ListItems from "./ListItems";
import { Drawer, Button } from "@material-ui/core";
import { useStyle } from "./temporaryDrawerStyle";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";

export default function TemporaryDrawer() {
  const classes = useStyle();
  const [state, setState] = React.useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuTwoToneIcon className={classes.menuIcon} />
      </Button>
      <Drawer
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        <ListItems classes={classes} toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
}
