export const SET_RESULT = 'SET_RESULT';
export const ADD_TYPE = 'ADD_TYPE';
export const ADD_PRIMARY = 'ADD_PRIMARY';
export const ADD_SUBTYPE = 'ADD_SUBTYPE';

export function setResult(result) {
  return { type: SET_RESULT, result };
}

export function addType(filter) {
  return { type: ADD_TYPE, filter};
}

export function addPrimary(filter) {
  return { type: ADD_PRIMARY, filter};
}

export function addSubtype(filter) {
  return { type: ADD_SUBTYPE, filter};
}
