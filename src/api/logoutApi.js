import { handleResponse, handleError } from "./apiUtils";

export function logoutUser(user) {
  return fetch("https://localhost:5001/api/account/logout", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
    credentials: "include"
  })
    .then(handleResponse)
    .catch(handleError);
}
