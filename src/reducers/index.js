import { combineReducers } from 'redux';
import result from './result.js';
import filters from './filters.js';

const stressApp = combineReducers ({
  result,
  filters
});

export default stressApp;
