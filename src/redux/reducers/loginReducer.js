import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function loginReducer(
  state = initialState.loggedInUser,
  action
) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return action.loggedInUser.payload;
    case types.LOGOUT_USER_SUCCESS:
      return {};
    default:
      return state;
  }
}
