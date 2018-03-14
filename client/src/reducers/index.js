import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PollsReducer from './PollsReducer';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';


export default combineReducers({
  auth: AuthReducer,
  polls: PollsReducer,
  form: formReducer,
  user: UserReducer,
});
