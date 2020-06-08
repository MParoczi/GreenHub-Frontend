import React from "react";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Backdrop from "@material-ui/core/Backdrop";
import Divider from "@material-ui/core/Divider";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import PeopleAltTwoToneIcon from "@material-ui/icons/PeopleAltTwoTone";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";
import CakeTwoToneIcon from "@material-ui/icons/CakeTwoTone";
import VpnKeyTwoToneIcon from "@material-ui/icons/VpnKeyTwoTone";
import PublicTwoToneIcon from "@material-ui/icons/PublicTwoTone";
import MusicNoteTwoToneIcon from "@material-ui/icons/MusicNoteTwoTone";
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
                    <PersonOutlineTwoToneIcon />
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
                    <PeopleAltTwoToneIcon />
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
                    <VpnKeyTwoToneIcon />
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
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PublicTwoToneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Home country"
                  secondary="Home country is where you consider yourself to be at home"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MusicNoteTwoToneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Favorite genres"
                  secondary="You can choose between multiple music genres that most fit your taste"
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
