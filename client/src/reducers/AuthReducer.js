import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  create_user_success: null,
  create_user_fail: null,
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS: {
      const newState = {
        create_user_success: action.payload,
        create_user_fail: null,
      };
      return { ...state, ...newState };
    }
    case CREATE_USER_FAIL: {
      const newState = {
        create_user_success: null,
        create_user_fail: action.payload,
      };
      return { ...state, ...newState };
    }
    case LOGIN_USER: {
      const newState = {
        loading: true,
        error: '',
      };
      return { ...state, ...newState };
    }
    case LOGIN_USER_SUCCESS: {
      const newState = {
        user: action.payload,
        loading: false,
        error: '',
      };
      return { ...state, ...newState };
    }
    case LOGIN_USER_FAIL: {
      const newState = {
        loading: false,
        error: 'Authentication Error',
      };
      return { ...state, ...newState };
    }
    default:
      return state;
  }
};
