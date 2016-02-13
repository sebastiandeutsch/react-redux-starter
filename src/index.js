import 'babel-core/register';
import 'babel-plugin-external-helpers-2';
import 'es5-shim/es5-sham';
import 'font-awesome-webpack';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

ReactDOM.render(
  <App />,
  document.getElementById('application')
);
