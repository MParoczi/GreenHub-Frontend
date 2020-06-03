export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    const error = await response.json();
    throw new Error(error.message);
  }
  if (response.status === 401) {
    const error = await response.json();
    history.push("/login");
    throw new Error(error.message);
  }
  throw new Error("Network response was not ok.");
}

export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}
