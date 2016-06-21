console.log("great");
var myApp = angular.module("myApp", ['ngMaterial', 'ngMessages', 'ngRoute']);

myApp.config(['$mdThemingProvider', function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('grey');
}]);

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
      when("/home", {
          templateUrl: "/views/routes/home.html",
          controller: "HomeController"
      }).
      when("/add", {
          templateUrl: "/views/routes/add.html",
          controller: "AddController"
      }).
      when("/view", {
          templateUrl: "/views/routes/view.html",
          controller: "ViewController"
      }).
      otherwise({
          redirectTo: '/home'
      });
}]);
