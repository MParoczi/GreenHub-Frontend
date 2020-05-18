import { combineReducers } from "redux";
import apiCallsInProgress from "./apiStatusReducer";
import registrationReducer from "./registrationReducer";

const rootReducer = combineReducers({
  apiCallsInProgress,
  registrationReducer
});

export default rootReducer;
