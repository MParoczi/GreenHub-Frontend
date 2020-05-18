import { handleResponse, handleError } from "./apiUtils";

export function getCountries() {
  return fetch("https://restcountries.eu/rest/v2/all")
    .then(handleResponse)
    .catch(handleError);
}
