import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import {
  HomeTwoTone,
  VpnKeyTwoTone,
  LockOpenTwoTone,
  InfoTwoTone
} from "@material-ui/icons";

function ListItems({ classes, toggleDrawer }) {
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
}

ListItems.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default ListItems;
