import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS: {
      return action.payload;
    }
    case CREATE_USER_FAIL: {
      return action.payload;
    }
    default:
      return state;
  }
};
