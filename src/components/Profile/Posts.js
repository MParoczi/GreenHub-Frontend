import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import PropTypes from "prop-types";
import PostModal from "./PostModal";
import { addPost } from "../../redux/actions/postActions";
import { toast } from "react-toastify";

function Posts({ classes }) {
  const user = useSelector(state => state.loggedInUser);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [post, setPost] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;
    setPost(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const formIsValid = () => {
    const { title, content } = post;
    const errors = {};

    if (!title) errors.title = "Title can not be empty";
    if (!content) errors.content = "Content can not be empty";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!formIsValid()) {
      console.log(errors);
      return;
    }
    dispatch(addPost({ ...post, userId: user.id }, user.token.token))
      .then(response => {
        toast.success(response.post.message);
        setPost({});
        handleClose();
      })
      .catch(response => {
        toast.error(response.message);
      });
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
        errors={errors}
      />
    </>
  );
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Posts;
