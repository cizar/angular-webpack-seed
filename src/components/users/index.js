import angular from 'angular';
import router from 'angular-ui-router';

let module = angular.module('core.components.users', [ router ])
  .controller('UsersController', function($scope) {
    $scope.name = 'hola';
  })
  .config(function($stateProvider) {
    $stateProvider.state('users', {
      url: '/users',
      template: require('./index.html'),
      controller: 'UsersController'
    });
  });

export default module.name;
