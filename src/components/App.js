import React, { useCallback, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./common/Header/Header";
import PageNotFound from "./common/PageNotFound/PageNotFound";
import { useStyle } from "./appStyle";
import About from "./About/About";
import Footer from "./common/Footer/Footer";
import Registration from "./Registration/Registration";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login/Login";
import {
  logoutUser,
  getCurrentUser,
  refreshToken
} from "../redux/actions/userActions";
import PrivateRoute from "./common/PrivateRoute/PrivateRoute";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";

function App() {
  const classes = useStyle();
  const user = useSelector(state => state.loggedInUser);
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch(logoutUser(user));
  }, [dispatch, user]);

  const getUser = useCallback(() => {
    if (Object.keys(user).length === 0) {
      dispatch(getCurrentUser(user))
        .then(response => {
          toast.success(response.loggedInUser.message);
        })
        .catch(() => {
          if (Object.keys(user).length !== 0) {
            logout();
          }
        });
    }
  }, [dispatch, logout, user]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      let expiration =
        new Date(user.token.expiration).setMinutes(
          new Date(user.token.expiration).getMinutes() - 1
        ) - Date.now();
      setTimeout(dispatch, expiration, refreshToken());
    }
  }, [dispatch, user]);

  return (
    <div className={classes.root}>
      <Header />
      <Switch>
        <PrivateRoute
          exact
          path="/"
          redirect="/login"
          user={user.token !== undefined}
          component={Home}
        />
        <PrivateRoute
          exact
          path="/registration"
          redirect="/"
          user={user.token === undefined}
          component={Registration}
        />
        <PrivateRoute
          exact
          path="/login"
          redirect="/"
          user={user.token === undefined}
          component={Login}
        />
        <PrivateRoute
          exact
          path="/profile"
          redirect="/login"
          user={user.token !== undefined}
          component={Profile}
        />
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
      <ToastContainer autoClose={6000} hideProgressBar />
    </div>
  );
}

export default App;
