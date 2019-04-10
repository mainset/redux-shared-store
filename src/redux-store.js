import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createMemoryHistory, createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

import createGlobalReducer from './global-reducer';
import createGlobalSaga from './global-saga';

const isServer = !(
  typeof window !== 'undefined' && window.document && window.document.createElement
);

export const extendScalableStoreCreator = (extraReducers = {}, extraSagas = []) => (
  ({ requestUrl } = {}) => {
    const dynamicHistory = isServer
      ? createMemoryHistory({ initialEntries: [requestUrl] })
      : createBrowserHistory();

    const globalReducer = createGlobalReducer(dynamicHistory, extraReducers);
    const globalSaga = createGlobalSaga(extraSagas);
    const sagaMiddleware = createSagaMiddleware();

    const middlewareComposedWithDevTools = composeWithDevTools(
      applyMiddleware(
        routerMiddleware(dynamicHistory),
        sagaMiddleware,
        // NOTE: put other middleware here
      ),
    );

    const reduxStore = createStore(
      globalReducer,
      middlewareComposedWithDevTools,
    );

    sagaMiddleware.run(globalSaga);

    return {
      store: reduxStore,
      history: dynamicHistory,
    };
  }
);

export default extendScalableStoreCreator;
