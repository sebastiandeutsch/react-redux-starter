import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './index';
import DevTools from '../containers/DevTools';

export default function configureStore(initialState) {
  let store;

  if (process.env.NODE_ENV == "production") {
    const createStoreWithMiddleware = compose(
      applyMiddleware(thunk),
    )(createStore);
    store = createStoreWithMiddleware(rootReducer);
  } else {
    const createStoreWithMiddleware = compose(
      applyMiddleware(thunk),
      DevTools.instrument()
    )(createStore);
    store = createStoreWithMiddleware(rootReducer);

    // if (module.hot) {
    //   // Enable Webpack hot module replacement for reducers
    //   module.hot.accept('reducers', () => {
    //     const nextReducer = require('./index');
    //     store.replaceReducer(nextReducer);
    //   });
    // }
  }

  return store;
}
