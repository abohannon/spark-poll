import axios from 'axios';
import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_USER,
} from './types';

export const createUser = userData => async (dispatch) => {
  const res = await axios.post('/api/create_user', userData);
  if (res.status === 201) {
    dispatch({ type: CREATE_USER_SUCCESS, payload: res.data });
  } else {
    dispatch({ type: CREATE_USER_FAIL, payload: res.data });
  }
};

export const loginUser = userData => async (dispatch) => {
  const res = await axios.post('/api/login_user', userData);
  console.log('login user:', userData);
  dispatch({ type: LOGIN_USER, payload: res.data });
};

export const fetchUser = () => {};
