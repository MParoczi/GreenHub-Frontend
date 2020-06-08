import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";

function getCurrentUserSuccess(loggedInUser) {
  return { type: types.GET_CURRENT_USER_SUCCESS, loggedInUser };
}

function loginUserSuccess(loggedInUser) {
  return { type: types.LOGIN_USER_SUCCESS, loggedInUser };
}

function loggedOutSuccess(loggedOutUser) {
  return { type: types.LOGOUT_USER_SUCCESS, loggedOutUser };
}

function refreshTokenSuccess(token) {
  return { type: types.REFRESH_TOKEN_SUCCESS, token };
}

function loadCountriesSuccess(countries) {
  return { type: types.LOAD_COUNTRIES_SUCCESS, countries };
}

function registerUserSuccess(registeredUser) {
  return { type: types.REGISTER_USER_SUCCESS, registeredUser };
}

export function getCurrentUser() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return userApi
      .getCurrentUser()
      .then(loggedInUser => dispatch(getCurrentUserSuccess(loggedInUser)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function loginUser(user) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return userApi
      .loginUser(user)
      .then(loggedInUser => dispatch(loginUserSuccess(loggedInUser)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function logoutUser(user) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return userApi
      .logoutUser(user)
      .then(loggedOutUser => {
        dispatch(loggedOutSuccess(loggedOutUser));
        window.localStorage.setItem("logout", Date.now().toString());
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function refreshToken() {
  return function(dispatch) {
    return userApi
      .refreshToken()
      .then(token => dispatch(refreshTokenSuccess(token)))
      .catch(error => {
        throw error;
      });
  };
}

export function loadCountries() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return userApi
      .getCountries()
      .then(countries => dispatch(loadCountriesSuccess(countries)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function registerUser(user) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return userApi
      .registerUser(user)
      .then(registeredUser => dispatch(registerUserSuccess(registeredUser)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
