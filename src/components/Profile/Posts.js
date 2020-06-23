import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Pagination from "@material-ui/lab/Pagination";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import PropTypes from "prop-types";
import PostModal from "./PostModal";
import { addPost, getUserPosts } from "../../redux/actions/postActions";
import { toast } from "react-toastify";
import { ThemeProvider } from "@material-ui/styles";
import { defaultMaterialTheme } from "./profilePageStyle";
import CircularProgress from "@material-ui/core/CircularProgress";

function Posts({ classes }) {
  const user = useSelector(state => state.loggedInUser);
  const posts = useSelector(state => state.posts);
  const loading = useSelector(state => state.apiCallsInProgress);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [post, setPost] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setErrors({});
    setPost({});
  };

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
      return;
    }
    dispatch(addPost({ ...post, userId: user.id }, user.token.token))
      .then(response => {
        toast.success(response.post.message);
        handleClose();
      })
      .catch(response => {
        toast.error(response.message);
      });
  };

  const getPosts = useCallback(() => {
    if (posts.length === 0) {
      dispatch(getUserPosts(user))
        .then(() => console.log("Posts are loaded"))
        .catch(() => console.log("Posts couldn't be loaded"));
    }
  }, [posts.length, dispatch, user]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.title}>My posts</Typography>
        {loading ? (
          <ThemeProvider theme={defaultMaterialTheme}>
            <CircularProgress color="secondary" />
          </ThemeProvider>
        ) : (
          <>
            <Tooltip title="Add new post" onClick={handleOpen}>
              <IconButton>
                <AddCircleTwoToneIcon />
              </IconButton>
            </Tooltip>
            <Pagination
              count={Math.ceil(posts.length / 5)}
              variant="outlined"
              shape="rounded"
              className={classes.pagination}
            />
          </>
        )}
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
