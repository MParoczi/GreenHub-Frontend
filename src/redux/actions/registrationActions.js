import * as types from "./actionTypes";
import * as registrationApi from "../../api/registrationApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";

function loadCountriesSuccess(countries) {
  return { type: types.LOAD_COUNTRIES_SUCCESS, countries };
}

function registerUserSuccess(course) {
  return { type: types.REGISTER_USER_SUCCESS, course };
}

export function loadCountries() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return registrationApi
      .getCountries()
      .then(countries => dispatch(loadCountriesSuccess(countries)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
