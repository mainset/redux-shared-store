import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const createGlobalReducer = (
  history,
  extraReducers,
) => (
  combineReducers({
    ...extraReducers,
    // NOTE: put other app reducers here

    router: connectRouter(history),
  })
);

export default createGlobalReducer;
