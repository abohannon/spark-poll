import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PollsReducer from './PollsReducer';


export default combineReducers({
  auth: {},
  polls: PollsReducer,
  form: formReducer,
});
