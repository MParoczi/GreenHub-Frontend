import { handleResponse, handleError } from "./apiUtils";

export function loginUser(user) {
  return fetch("https://localhost:5001/api/account/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}
