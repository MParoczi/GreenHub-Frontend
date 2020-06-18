import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import PropTypes from "prop-types";
import PostModal from "./PostModal";

function Posts({ classes }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [post, setPost] = React.useState(null);

  const handleChange = event => {
    const { name, value } = event.target;
    setPost(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.title}>My posts</Typography>
        <Tooltip title="Add new post" onClick={handleOpen}>
          <IconButton>
            <AddCircleTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Paper>
      <PostModal
        classes={classes}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        open={open}
      />
    </>
  );
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Posts;
