import React from "react";
import LoggedOutListItems from "./LoggedOutListItems";
import LoggedInListItems from "./LoggedInListItems";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";
import { useSelector } from "react-redux";
import { useStyle } from "./temporaryDrawerStyle";

export default function TemporaryDrawer() {
  const classes = useStyle();
  const [state, setState] = React.useState(false);
  const user = useSelector(state => state.loggedInUser);

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
        {Object.keys(user).length === 0 ? (
          <LoggedOutListItems classes={classes} toggleDrawer={toggleDrawer} />
        ) : (
          <LoggedInListItems
            classes={classes}
            toggleDrawer={toggleDrawer}
            user={user}
          />
        )}
      </Drawer>
    </div>
  );
}
