import { handleResponse, handleError } from "./apiUtils";

const accountApiUrl = "https://legato-social.herokuapp.com/api/account/";

export function getCurrentUser() {
  return fetch(`${accountApiUrl}getCurrentUser`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    credentials: "include"
  })
    .then(handleResponse)
    .catch(handleError);
}

export function loginUser(user) {
  return fetch(`${accountApiUrl}login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
    credentials: "include"
  })
    .then(handleResponse)
    .catch(handleError);
}

export function logoutUser(user) {
  return fetch(`${accountApiUrl}logout`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
    credentials: "include"
  })
    .then(handleResponse)
    .catch(handleError);
}

export function refreshToken() {
  return fetch(`${accountApiUrl}refreshToken`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    credentials: "include"
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getCountries() {
  return fetch("https://restcountries.eu/rest/v2/all")
    .then(handleResponse)
    .catch(handleError);
}

export function registerUser(user) {
  return fetch(`${accountApiUrl}register`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}
