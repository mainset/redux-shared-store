import { fork, all } from 'redux-saga/effects';

const sagas = [
  // NOTE: put other app sagas here
];

function createGlobalSaga(customSagas) {
  return function* () {
    if (customSagas) sagas.push(...customSagas);
    const globalSagasForks = sagas.map((saga) => fork(saga));

    yield all(globalSagasForks);
  }
}

export default createGlobalSaga;
