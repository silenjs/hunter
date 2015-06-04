/**
* @ngdoc overview
* @name hunterApp
* @description
* # hunterApp
*
* Main module of the application.
*/
var hunterApp = angular.module('hunterApp',['ui.router']);
hunterApp.config(function($stateProvider,$urlRouterProvider){
    // $urlRouterProvider.otherwise('/main');
    $stateProvider
        .state('creater',{
            url:'/creater',
            templateUrl:'views/creater.html'
        })
        .state('main',{
            url:'/main',
            templateUrl:'views/main.html'
        })
        .state('about',{
            url:'/about',
            templateUrl:'views/about.html'
        })
});  