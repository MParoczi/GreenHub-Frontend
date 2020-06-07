import { handleResponse, handleError } from "./apiUtils";

export function getCurrentUser() {
  return fetch("https://localhost:5001/api/account/getCurrentUser", {
    method: "POST",
    headers: { "content-type": "application/json" },
    credentials: "include"
  })
    .then(handleResponse)
    .catch(handleError);
}
