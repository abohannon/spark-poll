import {
  CREATE_POLL,
  CREATE_POLL_SUCCESS,
  CREATE_POLL_FAIL,
  DELETE_POLL,
  DELETE_POLL_SUCCESS,
  DELETE_POLL_FAIL,
  FETCH_USER_SUCCESS,
  SUBMIT_POLL,
  SUBMIT_POLL_SUCCESS,
  SUBMIT_POLL_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: '',
  message: '',
  polls: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT_POLL:
    case CREATE_POLL:
    case DELETE_POLL: {
      const newState = {
        loading: true,
      };
      return { ...state, ...newState };
    }
    case CREATE_POLL_FAIL:
    case DELETE_POLL_FAIL: {
      const newState = {
        loading: false,
        error: action.payload,
        message: '',
      };
      return { ...state, ...newState };
    }
    case CREATE_POLL_SUCCESS: {
      const newState = {
        loading: false,
        poll: action.payload,
        message: 'Poll created successfully',
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
    case FETCH_USER_SUCCESS: {
      const { polls } = action.payload;
      const newState = {
        loading: false,
        error: '',
        polls: polls.reverse(),
      };
      return { ...state, ...newState };
    }
    case SUBMIT_POLL_SUCCESS: {
      const newState = {
        loading: false,
        error: '',
        message: action.payload,
      };
      return { ...state, ...newState };
    }
    case SUBMIT_POLL_FAIL: {
      const newState = {
        loading: false,
        error: action.payload,
        message: '',
      };
      return { ...state, ...newState };
    }
    default:
      return state;
  }
};
