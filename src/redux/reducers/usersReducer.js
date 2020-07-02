import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.GET_USERS_SUCCESS:
      return action.users.payload;
    default:
      return state;
  }
}
