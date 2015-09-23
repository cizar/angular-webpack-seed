import angular from 'angular';

let components = angular.module('app.components', [
  require('./main'),
  require('./users')
]);

export default components.name;
