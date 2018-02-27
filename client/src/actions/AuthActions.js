import axios from 'axios';
import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
} from './types';

export const createUser = userData => (dispatch) => {
  try {
    axios.post('/api/create_user', userData)
      .then((response) => {
        dispatch({ type: CREATE_USER_SUCCESS, payload: response.data });
      });
  } catch (error) {
    dispatch({ type: CREATE_USER_FAIL });
  }
};

export const fetchUser = () => {};
