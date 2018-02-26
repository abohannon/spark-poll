import { combineReducers } from 'redux';
import PollsReducer from './PollsReducer';

export default combineReducers({
  auth: {},
  polls: PollsReducer,
});
