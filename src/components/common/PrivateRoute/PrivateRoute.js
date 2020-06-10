import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute({ component: Component, redirect, loggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to={redirect} />
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  redirect: PropTypes.string.isRequired,
  loggedInUser: PropTypes.bool.isRequired
};

export default PrivateRoute;
