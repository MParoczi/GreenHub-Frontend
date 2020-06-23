import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function postReducer(state = initialState.posts, action) {
  switch (action.type) {
    case types.ADD_POST_SUCCESS:
      return [action.post.payload, ...state];
    case types.GET_USER_POSTS_SUCCESS:
      return action.posts.payload;
    case types.DELETE_POST_SUCCESS:
      return state.filter(post => post.id !== action.post.payload.id);
    case types.UPDATE_POST_SUCCESS:
      return state.map(post =>
        post.id === action.post.payload ? action.post.payload : post
      );
    default:
      return state;
  }
}
