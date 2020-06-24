import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";

function DeleteDialog({
  post,
  open,
  handleDeletingPost,
  handleClose,
  classes
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Deleting {post.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you would like to delete the post titled "{post.title}"?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleClose}
          className={classes.cancelButton}
        >
          Cancel
        </Button>
        <Button
          autoFocus
          onClick={handleDeletingPost}
          className={classes.deleteButton}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DeleteDialog.propTypes = {
  post: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleDeletingPost: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default DeleteDialog;
