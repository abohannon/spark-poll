import {
  CREATE_POLL,
  CREATE_POLL_SUCCESS,
  CREATE_POLL_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: null,
  poll: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_POLL: {
      const newState = {
        loading: true,
      };
      return { ...state, ...newState };
    }
    case CREATE_POLL_SUCCESS: {
      const newState = {
        loading: false,
        poll: action.payload,
      };
      return { ...state, ...newState };
    }
    case CREATE_POLL_FAIL: {
      const newState = {
        loading: false,
        error: action.payload,
      };
      return { ...state, ...newState };
    }
    default:
      return state;
  }
};
