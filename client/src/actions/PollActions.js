import axios from 'axios';
import { FETCH_POLLS_SUCCESS } from './types';

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

export const fetch = () => {};
