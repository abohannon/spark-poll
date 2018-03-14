import { FETCH_POLLS_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POLLS_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};
