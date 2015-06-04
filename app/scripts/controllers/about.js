'use strict';

/**
 * @ngdoc function
 * @name hunterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hunterApp
 */
angular.module('hunterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
