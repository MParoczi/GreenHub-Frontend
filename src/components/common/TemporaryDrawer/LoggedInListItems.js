import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import HomeTwoTone from "@material-ui/icons/HomeTwoTone";
import MeetingRoomTwoToneIcon from "@material-ui/icons/MeetingRoomTwoTone";
import InfoTwoTone from "@material-ui/icons/InfoTwoTone";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/actions/userActions";

function LoggedOutListItems({ classes, toggleDrawer, user }) {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser(user));
  };

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
        <ListItem className={classes.listItem} onClick={logout}>
          <ListItemIcon className={classes.icon}>
            <MeetingRoomTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" className={classes.text} />
        </ListItem>
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
  toggleDrawer: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default LoggedOutListItems;
