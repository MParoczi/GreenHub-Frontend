import { combineReducers } from "redux";
import apiCallsInProgress from "./apiStatusReducer";
import countries from "./registrationReducer";
import loggedInUser from "./userReducer";

const rootReducer = combineReducers({
  apiCallsInProgress,
  countries,
  loggedInUser
});

export default rootReducer;
