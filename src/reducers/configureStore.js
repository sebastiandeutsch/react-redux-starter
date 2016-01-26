import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { createHistory } from 'history';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import DevTools from 'containers/DevTools';

export default function configureStore(initialState) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    DevTools.instrument()
  )(createStore);
  const store = createStoreWithMiddleware(rootReducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
