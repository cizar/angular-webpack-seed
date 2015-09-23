import angular from 'angular';
import uiRouter from 'angular-ui-router';

import components from './components';

angular.module('app', [ uiRouter, components ])
  .config(function($urlRouterProvider, $locationProvider) {
    console.log('Initializing core')
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  });
