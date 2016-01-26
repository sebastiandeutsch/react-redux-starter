import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import App from './containers/App';

// ReactDOM.render(
//   <App />,
//   document.getElementById('teamreaderapp')
// );

// console.log("hallo");
// console.log(ReactDOMServer.renderToStaticMarkup(<App />));


// var path = require('path');
// var express = require('express');
// var webpack = require('webpack');
//
// console.log("hallo");

// var path = require('path');
// var express = require('express');
// var webpack = require('webpack');
// var config = require('../webpack/config.development');
// var routes = require('./renderServerRoutes');
//
// import { match, RouterContext } from 'react-router';
//
// var app = express();
// var compiler = webpack(config);
//
// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));
//
// app.use(require('webpack-hot-middleware')(compiler));
//
// // app.use(express.static(__dirname + '/src/public'));
//
// // app.get('*', function(req, res) {
// //   res.sendFile(path.join(__dirname, 'index.html'));
// // });
//
// // app.get('*', function(req, res) {
// //   res.sendFile(path.join(__dirname, '/src/public/index.html'));
// // });
//
// app.get('*', (req, res) => {
//   match(
//     { routes, location: req.url },
//     partial(routeMatchHandler, res)
//   );
// });
//
// app.listen(9000, 'localhost', function(err) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//
//   console.log('Listening at http://localhost:9000');
// });
