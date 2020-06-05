import * as types from "./actionTypes";
import * as logoutApi from "../../api/logoutApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";

function loggedOutSuccess(loggedOutUser) {
  return { type: types.LOGOUT_USER_SUCCESS, loggedOutUser };
}

export function logoutUser(user, history) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return logoutApi
      .logoutUser(user, history)
      .then(loggedOutUser => dispatch(loggedOutSuccess(loggedOutUser)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
