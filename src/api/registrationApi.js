import { handleResponse, handleError } from "./apiUtils";

export function getCountries() {
  return fetch("https://restcountries.eu/rest/v2/all")
    .then(handleResponse)
    .catch(handleError);
}

export function registerUser(user) {
  return fetch("https://localhost:5001/api/account/register", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}
