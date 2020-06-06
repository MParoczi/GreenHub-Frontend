import { logoutUser } from "../redux/actions/logoutActions";

export async function handleResponse(response, dispatch, user, history) {
  let error;
  switch (response.status) {
    case 200:
      return response.json();
    case 400:
      error = await response.json();
      throw new Error(error.message);
    case 401:
      error = await response.json();
      if (Object.keys(user).length !== 0) {
        dispatch(logoutUser(user, history));
      }
      throw new Error(error.message);
    default:
      throw new Error("Network response was not ok.");
  }
}

export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}
