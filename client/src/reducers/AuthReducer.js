import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  error: '',
  loading: false,
  isAuthenticated: !!localStorage.getItem('jwtToken'),
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS: {
      const newState = {
        create_user_success: action.payload,
        create_user_fail: '',
        isAuthenticated: true,
      };
      return { ...state, ...newState };
    }
    case CREATE_USER_FAIL: {
      const newState = {
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
        isAuthenticated: true,
        loading: false,
        error: '',
      };
      return { ...state, ...newState };
    }
    case LOGIN_USER_FAIL: {
      const newState = {
        loading: false,
        error: 'Authentication Error',
        isAuthenticated: false,
      };
      return { ...state, ...newState };
    }
    case FETCH_USER: {
      const newState = {
        loading: true,
        error: '',
      };
      return { ...state, ...newState };
    }
    case FETCH_USER_SUCCESS: {
      const newState = {
        loading: false,
        error: '',
        user: action.payload,
        isAuthenticated: true,
      };
      return { ...state, ...newState };
    }
    case FETCH_USER_FAIL: {
      const newState = {
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };
      return { ...state, ...newState };
    }
    default:
      return state;
  }
};
