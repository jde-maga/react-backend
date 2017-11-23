import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers/index';
import middlewares from './middlewares/index';
import yielder from './yielder';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(...middlewares, sagaMiddleware));

if (module.hot) {
  module.hot.accept(() => {
    store.replaceReducer(combineReducers(reducers));
  });
}

sagaMiddleware.run(yielder);

export default store;
