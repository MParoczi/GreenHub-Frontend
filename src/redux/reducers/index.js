import { combineReducers } from "redux";
import apiCallsInProgress from "./apiStatusReducer";
import countries from "./registrationReducer";
import loggedInUser from "./userReducer";
import posts from "./postReducer";
import users from "./usersReducer";

const rootReducer = combineReducers({
  apiCallsInProgress,
  countries,
  loggedInUser,
  posts,
  users
});

export default rootReducer;
