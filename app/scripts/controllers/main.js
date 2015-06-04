'use strict';

/**
 * @ngdoc function
 * @name hunterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hunterApp
 */
angular.module('hunterApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
