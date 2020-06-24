import { handleResponse, handleError } from "./apiUtils";
import { mainApiEndPoint } from "./apiConstants";

export function getCurrentUser() {
  return fetch(`${mainApiEndPoint}account/getCurrentUser`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    credentials: "include"
  })
    .then(handleResponse)
    .catch(handleError);
}

export function loginUser(user) {
  return fetch(`${mainApiEndPoint}account/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
    credentials: "include"
  })
    .then(handleResponse)
    .catch(handleError);
}

export function logoutUser(user) {
  return fetch(`${mainApiEndPoint}account/logout`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
    credentials: "include"
  })
    .then(handleResponse)
    .catch(handleError);
}

export function refreshToken() {
  return fetch(`${mainApiEndPoint}account/refreshToken`, {
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
  return fetch(`${mainApiEndPoint}account/register`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function changeProfilePicture(user) {
  return fetch(`${mainApiEndPoint}account/changeProfilePicture`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${user.token.token}`
    },
    body: JSON.stringify(user),
    credentials: "include"
  })
    .then(handleResponse)
    .catch(handleError);
}
