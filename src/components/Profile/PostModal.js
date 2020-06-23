import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { defaultMaterialTheme } from "./profilePageStyle";
import CircularProgress from "@material-ui/core/CircularProgress";

function PostModal({
  classes,
  open,
  handleClose,
  handleSubmit,
  handleChange,
  errors
}) {
  const loading = useSelector(state => state.apiCallsInProgress);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <Grid
          container
          spacing={0}
          justify="center"
          item
          xs={11}
          md={8}
          lg={6}
          className={classes.modalContainer}
        >
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.title}>Add new post</Typography>
              {loading ? (
                <ThemeProvider theme={defaultMaterialTheme}>
                  <CircularProgress color="secondary" />
                </ThemeProvider>
              ) : (
                <form onSubmit={handleSubmit}>
                  <TextField
                    name="title"
                    label="Title"
                    id="post-title-input"
                    variant="outlined"
                    onChange={handleChange}
                    error={errors.title !== undefined}
                    helperText={errors.title}
                    className={classes.textField}
                  />
                  <TextField
                    name="content"
                    label="Content"
                    id="post-content-input"
                    multiline
                    rows={6}
                    variant="outlined"
                    onChange={handleChange}
                    error={errors.content !== undefined}
                    helperText={errors.content}
                    className={classes.textField}
                  />
                  <Box>
                    <input
                      id="register-user"
                      type="submit"
                      className={classes.input}
                    />
                    <label htmlFor="register-user">
                      <Button
                        variant="contained"
                        className={classes.button}
                        component="span"
                      >
                        Submit
                      </Button>
                    </label>
                  </Box>
                </form>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Fade>
    </Modal>
  );
}

PostModal.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default PostModal;