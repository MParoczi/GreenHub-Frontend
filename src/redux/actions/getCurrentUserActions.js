import * as types from "./actionTypes";
import * as currentUserApi from "../../api/currentUserApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";

function getCurrentUserSuccess(loggedInUser) {
  return { type: types.GET_CURRENT_USER_SUCCESS, loggedInUser };
}

export function getCurrentUser() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return currentUserApi
      .getCurrentUser()
      .then(loggedInUser => dispatch(getCurrentUserSuccess(loggedInUser)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
