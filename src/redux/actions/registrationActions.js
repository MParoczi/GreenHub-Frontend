import * as types from "./actionTypes";
import * as courseApi from "../../api/registrationApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";

function loadCountriesSuccess(countries) {
  return { type: types.LOAD_COUNTRIES_SUCCESS, countries };
}

export function loadCountries() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCountries()
      .then(countries => dispatch(loadCountriesSuccess(countries)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
