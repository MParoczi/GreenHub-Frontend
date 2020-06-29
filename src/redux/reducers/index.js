import { combineReducers } from "redux";
import apiCallsInProgress from "./apiStatusReducer";
import countries from "./registrationReducer";
import loggedInUser from "./userReducer";
import posts from "./postReducer";

const rootReducer = combineReducers({
  apiCallsInProgress,
  countries,
  loggedInUser,
  posts
});

export default rootReducer;
