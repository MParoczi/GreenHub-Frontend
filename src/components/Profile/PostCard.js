import React from "react";
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

function PostCard({ post, user }) {
  const classes = useStyle();

  return (
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
          <IconButton>
            <DeleteTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit post">
          <IconButton>
            <EditTwoToneIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default PostCard;