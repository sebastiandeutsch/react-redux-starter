import React from 'react';

import { Provider } from 'react-redux';
import configureStore from 'reducers/configureStore';
import * as Actions from 'actions/Actions';
import { match, Router, Route, IndexRoute, browserHistory, useRouterHistory } from 'react-router';

import Layout from 'containers/Layout';
import Help from 'containers/routes/Help';
import Hello from 'containers/routes/Hello';
import BooksIndex from 'containers/routes/books/BooksIndex';

import StoreLoader from 'loaders/StoreLoader';

import ApplicationStyles from './App.sass';
import ResetStyles from './Reset.css';

const store = configureStore();
store.dispatch(Actions.loadBooks());

let routes = <Route path='/' component={Layout}>
  <IndexRoute component={BooksIndex} />
</Route>;

/**
 * App React Component
 */
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router
          history={browserHistory}
          render={(props) => (
            <StoreLoader {...props} store={store} />
          )}>
          {routes}
        </Router>
      </Provider>
    )
  }
}
