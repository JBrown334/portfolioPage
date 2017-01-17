var app = angular.module('app', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('home', {
      url: '/jb',
      templateUrl: './views/home.html'
    })

    .state('experience', {
        url: '/experience',
        templateUrl: './views/experience.html'
    })

    .state('hobbies', {
      url: '/hobbies',
      templateUrl: './views/hobbies.html'
    });

    $urlRouterProvider.otherwise('/jb');



});
