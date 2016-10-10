var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when("/", {
        templateUrl: "views/home.html",
        controller: "mainCtrl"
    })
    .when("/register", {
        templateUrl: "views/register.html"
    })

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});

app.controller('mainCtrl', function($scope){
    $scope.name ="sai";
})