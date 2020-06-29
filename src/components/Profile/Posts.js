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
import { getUserPosts } from "../../redux/actions/postActions";
import { ThemeProvider } from "@material-ui/styles";
import { defaultMaterialTheme } from "./profilePageStyle";
import CircularProgress from "@material-ui/core/CircularProgress";
import PostCard from "./PostCard";

function Posts({ classes }) {
  const user = useSelector(state => state.loggedInUser);
  const posts = useSelector(state => state.posts);
  const loading = useSelector(state => state.apiCallsInProgress);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);

  const handleOpen = () => {
    setOpen(true);
  };

  const handlePaging = (event, value) => {
    setPage(value);
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
        <Typography className={classes.title}>Posts</Typography>
        {loading ? (
          <ThemeProvider theme={defaultMaterialTheme}>
            <CircularProgress color="secondary" />
          </ThemeProvider>
        ) : (
          ""
        )}
        <Tooltip title="Add new post" onClick={handleOpen}>
          <IconButton>
            <AddCircleTwoToneIcon />
          </IconButton>
        </Tooltip>
        {posts.slice((page - 1) * 5, page * 5).map(post => (
          <PostCard post={post} user={user} key={post.id} />
        ))}
        <Pagination
          count={Math.ceil(posts.length / 5)}
          page={page}
          variant="outlined"
          shape="rounded"
          className={classes.pagination}
          onChange={handlePaging}
        />
      </Paper>
      <PostModal classes={classes} setOpen={setOpen} open={open} user={user} />
    </>
  );
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Posts;
