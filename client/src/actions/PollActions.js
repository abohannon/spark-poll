import axios from 'axios';
import {
  FETCH_POLLS_SUCCESS,
  CREATE_POLL,
  CREATE_POLL_SUCCESS,
  CREATE_POLL_FAIL,
} from './types';

export const pollsFetch = () => (dispatch) => {
  axios.get('/api/fetch_polls')
    .then((response) => {
      console.log(response);
      dispatch({
        type: FETCH_POLLS_SUCCESS,
        payload: response.data,
      });
    }).catch(err => console.log('ERROR FETCHING POLLS', err));
};

export const createPoll = (data, user) => async (dispatch) => {
  dispatch({ type: CREATE_POLL });
  const pollData = { ...data, ...user };
  try {
    console.log('inside try', data);
    const res = await axios.post('/api/create_poll', pollData);
    if (res.status !== 200) {
      dispatch({ type: CREATE_POLL_FAIL, payload: 'Error creating poll' });
    } else {
      dispatch({ type: CREATE_POLL_SUCCESS, payload: res.data });
    }
  } catch (error) {
    console.log('ERROR CREATING POLL:', error);
    dispatch({ type: CREATE_POLL_FAIL, payload: error });
  }
};

export const fetch = () => {};
