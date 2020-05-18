import * as types from "./actionTypes";
import * as courseApi from "../../api/registrationApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";

function loadCountriesSuccess(courses) {
  return { type: types.LOAD_COUNTRIES_SUCCESS, courses };
}

export function loadCountries() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCountries()
      .then(courses => dispatch(loadCountriesSuccess(courses)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
