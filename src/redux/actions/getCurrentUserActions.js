import * as types from "./actionTypes";
import * as currentUserApi from "../../api/currentUserApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";

function getCurrentUserSuccess(loggedInUser) {
  return { type: types.GET_CURRENT_USER_SUCCESS, loggedInUser };
}

export function getCurrentUser(user, history) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return currentUserApi
      .getCurrentUser(dispatch, user, history)
      .then(loggedInUser => dispatch(getCurrentUserSuccess(loggedInUser)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
