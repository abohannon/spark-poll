import {
  CREATE_POLL,
  CREATE_POLL_SUCCESS,
  CREATE_POLL_FAIL,
  DELETE_POLL,
  DELETE_POLL_SUCCESS,
  DELETE_POLL_FAIL,
  FETCH_USER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: null,
  message: null,
  polls: [],
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
    case DELETE_POLL: {
      const newState = {
        loading: true,
      };
      return { ...state, ...newState };
    }
    case DELETE_POLL_SUCCESS: {
      const newState = {
        loading: false,
        message: action.payload,
      };
      return { ...state, ...newState };
    }
    case DELETE_POLL_FAIL: {
      const newState = {
        loading: false,
        error: action.payload,
      };
      return { ...state, ...newState };
    }
    case FETCH_USER_SUCCESS: {
      const { polls } = action.payload;
      const newState = {
        loading: false,
        error: '',
        polls,
      };
      return { ...state, ...newState };
    }
    default:
      return state;
  }
};
