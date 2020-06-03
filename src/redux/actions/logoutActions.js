import * as types from "./actionTypes";
import * as logoutApi from "../../api/logoutApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";

function loggedOutSuccess(loggedOutUser) {
  return { type: types.LOGOUT_USER_SUCCESS, loggedOutUser };
}

export function logoutUser(user) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return logoutApi
      .logoutUser(user)
      .then(loggedOutUser => dispatch(loggedOutSuccess(loggedOutUser)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
