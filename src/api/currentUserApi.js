import { handleResponse, handleError } from "./apiUtils";

export function getCurrentUser(dispatch, user, history) {
  return fetch("https://localhost:5001/api/account/getCurrentUser", {
    method: "POST",
    headers: { "content-type": "application/json" },
    credentials: "include"
  })
    .then(function(response) {
      return handleResponse(response, dispatch, user, history);
    })
    .catch(handleError);
}
