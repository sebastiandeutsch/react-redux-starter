var _ = require('lodash');
var karmaBaseConfig = require('./config.base');

module.exports = function(config) {
  var configOptions = _.assign({}, karmaBaseConfig, {
    singleRun: true,
    browsers: [
      'PhantomJS'
    ],
    reporters: ['dots', 'junit'],
    junitReporter: {
      outputDir: './ci',
      outputFile: 'test-results.xml'
    }
  });
  config.set(configOptions);
};
