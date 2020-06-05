import { logoutUser } from "../redux/actions/logoutActions";

export async function handleResponse(response, dispatch, user) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    const error = await response.json();
    throw new Error(error.message);
  }
  if (response.status === 401) {
    const error = await response.json();
    if (Object.keys(user).length !== 0) {
      dispatch(logoutUser(user));
    }
    throw new Error(error.message);
  }
  throw new Error("Network response was not ok.");
}

export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}
