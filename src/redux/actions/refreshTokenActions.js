import * as types from "./actionTypes";
import * as refreshTokenApi from "../../api/refreshTokenApi";

function refreshTokenSuccess(token) {
  return { type: types.REFRESH_TOKEN_SUCCESS, token };
}

export function refreshToken() {
  return function(dispatch) {
    return refreshTokenApi
      .refreshToken()
      .then(token => dispatch(refreshTokenSuccess(token)))
      .catch(error => {
        throw error;
      });
  };
}
