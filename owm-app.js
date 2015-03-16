angular.module('OWMApp', ['ngRoute', 'ngAnimate'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateURL : 'home.html',
            controller : 'HomeController'
        }).when('/cities/:city', {
            templateURL : 'city.html',
            controller : 'CityController'
        });
    }])
    .controller('HomeContoller', function($scope) {
        //empty for now
    })
    .controller('CityController', function($scope, city) {
        $scope.city = city;
    });
    //$locationProvider.html5mode({ enabled: true, requireBase: false });
