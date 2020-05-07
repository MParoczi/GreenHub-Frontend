import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";
import VpnKeyTwoToneIcon from "@material-ui/icons/VpnKeyTwoTone";
import LockOpenTwoToneIcon from "@material-ui/icons/LockOpenTwoTone";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
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
        <Link to="/">
          <ListItem className={classes.listItem}>
            <ListItemIcon className={classes.icon}>
              <HomeTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Home" className={classes.text} />
          </ListItem>
        </Link>
        <Divider />
        <ListItem>
          <ListItemIcon className={classes.icon}>
            <VpnKeyTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Login" className={classes.text} />
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.icon}>
            <LockOpenTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Registration" className={classes.text} />
        </ListItem>
        <Divider />
        <Link to="/about">
          <ListItem className={classes.listItem}>
            <ListItemIcon className={classes.icon}>
              <InfoTwoToneIcon />
            </ListItemIcon>
            <ListItemText
              primary="About"
              className={classes.text}
              classes={{}}
            />
          </ListItem>
        </Link>
      </List>
    </div>
  );

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
        {list()}
      </Drawer>
    </div>
  );
}
