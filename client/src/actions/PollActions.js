import axios from 'axios';
import {
  FETCH_POLLS,
  FETCH_POLLS_SUCCESS,
  FETCH_POLLS_FAIL,
  CREATE_POLL,
  CREATE_POLL_SUCCESS,
  CREATE_POLL_FAIL,
  DELETE_POLL,
  DELETE_POLL_SUCCESS,
  DELETE_POLL_FAIL,
  FETCH_SINGLE_POLL,
  FETCH_SINGLE_POLL_SUCCESS,
  FETCH_SINGLE_POLL_FAIL,
} from './types';

export const pollsFetch = () => async (dispatch) => {
  dispatch({
    type: FETCH_POLLS,
  });
  try {
    const res = await axios.get('/api/fetch_polls');
    dispatch({
      type: FETCH_POLLS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_POLLS_FAIL,
      payload: error,
    });
  }
};

export const createPoll = (data, user, history) => async (dispatch) => {
  dispatch({ type: CREATE_POLL });
  const pollData = { ...data, ...user };
  try {
    console.log('inside try', data);
    const res = await axios.post('/api/create_poll', pollData);
    if (res.status !== 200) {
      dispatch({ type: CREATE_POLL_FAIL, payload: 'Error creating poll' });
    } else {
      dispatch({ type: CREATE_POLL_SUCCESS, payload: res.data });
      history.push('/dashboard');
    }
  } catch (error) {
    console.log('ERROR CREATING POLL:', error);
    dispatch({ type: CREATE_POLL_FAIL, payload: error });
  }
};

export const deletePoll = id => async (dispatch) => {
  dispatch({ type: DELETE_POLL });
  console.log('delete poll action:', id);
  try {
    const res = await axios.post('/api/delete_poll', { id });
    if (res.status !== 200) {
      dispatch({ type: DELETE_POLL_FAIL, payload: res.data });
    } else {
      dispatch({ type: DELETE_POLL_SUCCESS, payload: res.data });
    }
  } catch (error) {
    dispatch({ type: DELETE_POLL_FAIL, payload: error });
  }
};

export const fetchSinglePoll = id => async (dispatch) => {
  dispatch({ type: FETCH_SINGLE_POLL });
  try {
    const res = await axios.get('/api/fetch_single_poll', id);
    dispatch({ type: FETCH_SINGLE_POLL_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_SINGLE_POLL_FAIL, payload: error });
  }
};
