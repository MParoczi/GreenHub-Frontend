import * as types from "./actionTypes";
import * as postApi from "../../api/postApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";

function addPostSuccess(post) {
  return { type: types.ADD_POST_SUCCESS, post };
}

export function addPost(post, token) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return postApi
      .addPost(post, token)
      .then(post => dispatch(addPostSuccess(post)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
