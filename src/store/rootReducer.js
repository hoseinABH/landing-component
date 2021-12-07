import { combineReducers } from 'redux';
import counterReducer from './reducers/counter';

export default combineReducers({
  counter: counterReducer,
});
