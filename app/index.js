const angular = require('angular');
const ngModule = angular.module("CalcApp", []);

require('./directives')(ngModule);
require('./controllers')(ngModule);
require('./services')(ngModule);

require('bootstrap');