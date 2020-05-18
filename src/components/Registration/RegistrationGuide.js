import React from "react";
import {
  Modal,
  Backdrop,
  Fade,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";
import CakeTwoToneIcon from "@material-ui/icons/CakeTwoTone";
import { useStyle } from "./registrationGuideStyle";

function RegistrationGuide() {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <span onClick={handleOpen} className={classes.button}>
        Registration Guide
      </span>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClick={handleClose}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <List className={classes.list}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="First name"
                  secondary="First name should only contain alphabetical characters"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Last name"
                  secondary="Last name should only contain alphabetical characters and apostrophe"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmailTwoToneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Email"
                  secondary="The email address have to be a valid one as we send our confirmation letter to that address"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Password"
                  secondary="The password should be at least 8 characters long, should contain at least one uppercase letter, one lowercase letter, one number and one special character but should not contain accents"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CakeTwoToneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Birth date"
                  secondary="You have to be at least 14 years old to be able to register"
                />
              </ListItem>
            </List>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default RegistrationGuide;
