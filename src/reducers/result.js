import { SET_RESULT } from '../actions';

const initialState = [];

const result = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULT:
      return action.result;
    default:
      return state;
  }
};

export default result;
