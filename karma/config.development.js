var _ = require('lodash');
var karmaBaseConfig = require('./config.base');

module.exports = function(config) {
  var configOptions = _.assign({}, karmaBaseConfig, {
    autoWatch: true,
    browsers: [
      //'PhantomJS',
      'Chrome',
      //'Firefox',
      //'Safari',
      //'Opera',
      //'IE',
    ]
  });
  config.set(configOptions);
};
