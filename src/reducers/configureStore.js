import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

export default function configureStore(initialState) {

  // Store enhancer: Thunk middleware
  let enhancer = applyMiddleware(thunk);

  // Add development tools
  if (process.env.NODE_ENV === 'development') {
    // Require DevTools only in development
    // so it is not included in the production build
    const DevTools = require('containers/DevTools').default;
    enhancer = compose(
      enhancer,
      DevTools.instrument()
    );
  }

  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
