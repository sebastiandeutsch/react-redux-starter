import 'babel-core/register';
import babelHelpers from 'babel-plugin-external-helpers-2';

require('es5-shim/es5-sham');
require("font-awesome-webpack");

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

ReactDOM.render(
  <App />,
  document.getElementById('application')
);
