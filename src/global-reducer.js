import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { exampleReducer } from './example';

const createGlobalReducer = (
  history,
  extraReducers,
) => (
  combineReducers({
    sharedExample: exampleReducer,
    ...extraReducers,
    // NOTE: put other app reducers here

    router: connectRouter(history),
  })
);

export default createGlobalReducer;
