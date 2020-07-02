import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useStyle } from "./homeStyle";
import { getUsers } from "../../redux/actions/userActions";

function Home() {
  const classes = useStyle();
  const user = useSelector(state => state.loggedInUser);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const fetchUsers = useCallback(() => {
    if (users.length === 0) {
      dispatch(getUsers(user));
    }
  }, [dispatch, user, users.length]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Grid container spacing={0} justify="center">
      <Grid item xs={11} md={10} lg={9} className={classes.row}>
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.title}>Home Page</Typography>
          Under development
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
