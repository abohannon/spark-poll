import {
  FETCH_POLLS,
  FETCH_POLLS_SUCCESS,
  FETCH_POLLS_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POLLS: {
      const newState = {
        loading: true,
      };
      return { ...state, ...newState };
    }
    case FETCH_POLLS_SUCCESS: {
      const newState = {
        loading: false,
        data: action.payload,
      };
      return { ...state, ...newState };
    }
    case FETCH_POLLS_FAIL: {
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
