// Polyfills
import 'phantomjs-function-bind-polyfill';

// Replace ./src with the directory of your application code and
// make sure the file name regexp matches your test files.
const context = require.context('../src/', true, /-test\.js$/);
context.keys().forEach(context);

jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
