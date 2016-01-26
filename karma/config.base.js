var webpackTestConfig = require('../webpack/config.test.js');

module.exports = {
  browsers: [
    'PhantomJS'
  ],
  files: [
    { pattern: '../webpack/tests.webpack.js', watched: true },
  ],
  frameworks: [
    'jasmine',
    'jasmine-matchers'
  ],
  preprocessors: {
    '../webpack/tests.webpack.js': ['webpack'],
  },
  reporters: ['progress'],
  webpack: webpackTestConfig,
  webpackMiddleware: {
    // webpack-dev-middleware configuration
    noInfo: true,
    stats: {
      colors: true
    }
  },
  captureTimeout: 10000
};
