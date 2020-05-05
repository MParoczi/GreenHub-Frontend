import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";
import { useStyle } from "./temporaryDrawerStyle";

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

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <InfoTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuTwoToneIcon className={classes.menuIcon} />
      </Button>
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        {list("right")}
      </Drawer>
    </div>
  );
}
