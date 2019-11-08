export const FETCH_SMURF_LOADING = "FETCH_SMURF_LOADING";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILED = "FETCH_SMURF_FAILED";
export const POST_SMURF_LOADING = "POST_SMURF_LOADING";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAILED = "POST_SMURF_FAILED";
// fetching data actions
export const smurfLoading = () => ({ type: FETCH_SMURF_LOADING });

export const smurfLoadingSuccess = data => ({
  type: FETCH_SMURF_SUCCESS,
  payload: data
});

export const smurfLoadingFailed = error => ({
  type: FETCH_SMURF_FAILED,
  payload: error
});
// Posting data actions
export const postSmurfLoading = () => ({ type: POST_SMURF_LOADING });

export const postSmurfLoadingSuccess = data => ({
  type: POST_SMURF_SUCCESS,
  payload: data
});

export const postSmurfLoadingFailed = error => ({
  type: POST_SMURF_FAILED,
  payload: error
});
// fetch smurf api call
export function fetchSmurfs(dispatch) {
  dispatch(smurfLoading());

  return fetch("http://localhost:3333/smurfs")
    .then(response => response.json())
    .then(data => dispatch(smurfLoadingSuccess(data)))
    .catch(error => dispatch(smurfLoadingFailed(error)));
}
//post smurf api call

export function addSmurf(data, dispatch) {
  dispatch(postSmurfLoading());

  return fetch("http://localhost:3333/smurfs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => dispatch(postSmurfLoadingSuccess(data)))
    .catch(error => dispatch(postSmurfLoadingFailed(error)));
}
