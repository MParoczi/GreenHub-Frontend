import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import Avatar from "@material-ui/core/Avatar";
import defaultProfilePic from "../../images/default_profile.png";
import { useStyle } from "./postCardStyle";
import DeleteDialog from "./DeleteDialog";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/actions/postActions";
import { toast } from "react-toastify";
import PostModal from "./PostModal";

function PostCard({ post, user }) {
  const classes = useStyle();
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const openDeleteDialog = () => {
    setDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setDeleteDialog(false);
  };

  const handlePostDelete = () => {
    dispatch(deletePost(user.token.token, post.id))
      .then(response => {
        toast.success(response.post.message);
        setDeleteDialog(false);
      })
      .catch(response => {
        toast.error(response.message);
      });
  };

  return (
    <>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <CardHeader
            avatar={
              <Avatar
                alt="profile-pic"
                src={
                  user.profilePicture ? user.profilePicture : defaultProfilePic
                }
              />
            }
            title={
              <Typography className={classes.title}>{post.title}</Typography>
            }
            subheader={
              <Typography className={classes.date}>
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric"
                }).format(new Date(post.dateOfCreation))}
              </Typography>
            }
            className={classes.header}
          />
          <Typography className={classes.content}>{post.content}</Typography>
        </CardContent>
        <CardActions>
          <Tooltip title="Delete post">
            <IconButton onClick={openDeleteDialog}>
              <DeleteTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit post">
            <IconButton onClick={handleOpen}>
              <EditTwoToneIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
      <DeleteDialog
        post={post}
        handleDeletingPost={handlePostDelete}
        handleClose={closeDeleteDialog}
        open={deleteDialog}
        classes={classes}
      />
      <PostModal
        classes={classes}
        setOpen={handleOpen}
        user={user}
        open={open}
        postToEdit={post}
      />
    </>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default PostCard;
