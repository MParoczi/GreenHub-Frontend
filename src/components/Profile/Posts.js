import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

function Posts({ classes }) {
  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography className={classes.title}>My posts</Typography>
    </Paper>
  );
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Posts;
