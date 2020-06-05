import { handleResponse, handleError } from "./apiUtils";

export function logoutUser(user, history) {
  return fetch("https://localhost:5001/api/account/logout", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .then(history.push("/login"))
    .catch(handleError);
}
