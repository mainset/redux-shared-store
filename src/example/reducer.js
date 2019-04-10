import { fromJS, Map } from 'immutable';

import {
  FETCH_WELCOME_DATA,
  FETCH_WELCOME_DATA_SUCCESS,
  FETCH_WELCOME_DATA_ERROR,
} from './constants';

const initialState = fromJS({
  data: Map(),
  isLoading: false,
  error: null,
});

function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WELCOME_DATA:
      return state
        .set('isLoading', true);
    case FETCH_WELCOME_DATA_SUCCESS:
      return state
        .set('data', fromJS(action.data))
        .set('isLoading', false)
        .set('error', null);
    case FETCH_WELCOME_DATA_ERROR:
      return state
        .set('isLoading', false)
        .set('error', fromJS(action.error));
    default:
      return state;
  }
}

export default exampleReducer;
