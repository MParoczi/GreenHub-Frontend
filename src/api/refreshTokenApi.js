import { handleResponse, handleError } from "./apiUtils";

export function refreshToken() {
  return fetch("https://localhost:5001/api/account/refreshToken", {
    method: "POST",
    headers: { "content-type": "application/json" },
    credentials: "include"
  })
    .then(handleResponse)
    .catch(handleError);
}
