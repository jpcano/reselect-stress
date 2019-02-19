const initialState = {
  type: [],
  primary: [],
  subtype: []
};

const result = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_TYPE':
    return {...state, type: action.filter };
  case 'ADD_PRIMARY':
    return {...state, primary: action.filter };
  case 'ADD_SUBTYPE':
    return {...state, subtype: action.filter  };
  default:
    return state;
  }
};

export default result;

