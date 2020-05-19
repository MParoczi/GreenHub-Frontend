import { combineReducers } from "redux";
import apiCallsInProgress from "./apiStatusReducer";
import countries from "./registrationReducer";

const rootReducer = combineReducers({
  apiCallsInProgress,
  countries
});

export default rootReducer;
