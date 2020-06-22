import { handleResponse, handleError } from "./apiUtils";
import { mainApiEndPoint } from "./apiConstants";

export function addPost(post, token) {
  return fetch(`${mainApiEndPoint}post/add`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(post),
    credentials: "include"
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getUserPosts(user) {
  return fetch(`${mainApiEndPoint}post/getUserPosts`, {
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
