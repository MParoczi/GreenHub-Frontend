import * as types from "./actionTypes";
import * as loginApi from "../../api/loginApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";

function loginUserSuccess(loggedInUser) {
  return { type: types.LOGIN_USER_SUCCESS, loggedInUser };
}

export function loginUser(user) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return loginApi
      .loginUser(user)
      .then(loggedInUser => dispatch(loginUserSuccess(loggedInUser)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
