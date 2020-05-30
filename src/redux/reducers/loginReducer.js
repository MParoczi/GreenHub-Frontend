import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function loginReducer(
  state = initialState.loggedInUser,
  action
) {
  if (action.type === types.LOGIN_USER_SUCCESS) {
    return action.loggedInUser;
  } else {
    return state;
  }
}
