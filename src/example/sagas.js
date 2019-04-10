import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchRequestExample } from './../utils';

import { fetchWelcomeSuccess, fetchWelcomeError } from './actions';

import { FETCH_WELCOME_DATA } from './constants';

function* fetchWelcomeData() {
  const { result, error } = yield call(fetchRequestExample, '/get', { method: 'GET' });

  if (error) {
    yield put(fetchWelcomeError(error));
  }

  yield put(fetchWelcomeSuccess(result));
}

function* exampleSagas() {
  return [
    yield takeLatest(FETCH_WELCOME_DATA, fetchWelcomeData),
  ];
}

export default exampleSagas;
