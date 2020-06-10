import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute({ component: Component, redirect, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        user ? <Component {...props} /> : <Redirect to={redirect} />
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  redirect: PropTypes.string.isRequired,
  user: PropTypes.bool.isRequired
};

export default PrivateRoute;
