import * as types from '../constants/types';

export function extractJSON(response) {
  return response.json();
}

export function onServerError(err) {
  console.log(err)
  return {
    type: types.SERVER_ERROR,
    err,
  };
}

export function hasError(response) {
  const { error } = response;
  if(error) return true;
  else return false
}

export function showCustomError(response) {
  console.log(response)
  return {
    type: types.SHOW_CUSTOM_ERROR,
    error: response,
  };
}