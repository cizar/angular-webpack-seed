import angular from 'angular';
import router from 'angular-ui-router';

let module = angular.module('app.components.main', [ router ])
  .controller('MainController', require('./controller'))
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      template: require('./index.html'),
      controller: 'MainController',
      controllerAs: 'vm'
    });
  });

export default module.name;
