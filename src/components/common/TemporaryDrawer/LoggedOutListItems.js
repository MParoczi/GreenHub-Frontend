import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import HomeTwoTone from "@material-ui/icons/HomeTwoTone";
import VpnKeyTwoTone from "@material-ui/icons/VpnKeyTwoTone";
import LockOpenTwoTone from "@material-ui/icons/LockOpenTwoTone";
import InfoTwoTone from "@material-ui/icons/InfoTwoTone";

function LoggedOutListItems({ classes, toggleDrawer }) {
  return (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link to="/">
          <ListItem className={classes.listItem}>
            <ListItemIcon className={classes.icon}>
              <HomeTwoTone />
            </ListItemIcon>
            <ListItemText primary="Home" className={classes.text} />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/login">
          <ListItem className={classes.listItem}>
            <ListItemIcon className={classes.icon}>
              <VpnKeyTwoTone />
            </ListItemIcon>
            <ListItemText primary="Login" className={classes.text} />
          </ListItem>
        </Link>
        <Link to="/registration">
          <ListItem className={classes.listItem}>
            <ListItemIcon className={classes.icon}>
              <LockOpenTwoTone />
            </ListItemIcon>
            <ListItemText primary="Registration" className={classes.text} />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/about">
          <ListItem className={classes.listItem}>
            <ListItemIcon className={classes.icon}>
              <InfoTwoTone />
            </ListItemIcon>
            <ListItemText primary="About" className={classes.text} />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}

LoggedOutListItems.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default LoggedOutListItems;
