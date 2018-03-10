import axios from 'axios';
import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  LOGOUT_USER,
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
  dispatch({ type: LOGIN_USER });
  try {
    const res = await axios.post('/api/login_user', userData);

    if (res.status !== 200) {
      dispatch({ type: LOGIN_USER_FAIL, payload: res.data });
      return;
    }

    localStorage.setItem('jwtToken', res.data.token);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
  } catch (error) {
    console.log('ERROR LOGGING IN USER:', error);
  }
  // TODO: Finish action
};

export const logout = history => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_USER });
    localStorage.removeItem('jwtToken');
    history.push('/');
  } catch (error) {
    dispatch({ type: LOGOUT_USER, payload: 'Error logging out user' });
    console.log('ERROR LOGGING OUT USER:', error);
  }
};

export const fetchUser = () => async (dispatch) => {
  dispatch({ type: FETCH_USER });

  const options = {
    method: 'GET',
    credentials: 'include',
    headers: {
      Authorization: localStorage.getItem('jwtToken'),
    },
  };

  try {
    const res = await axios.get('/api/get_user', options);

    if (res.status === 200) {
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
    } else {
      dispatch({ type: FETCH_USER_FAIL, payload: res.data });
    }
  } catch (error) {
    if (error) console.log('Error fetching user:', error);
    dispatch({ type: FETCH_USER_FAIL, payload: 'Error fetching user' });
  }
};
