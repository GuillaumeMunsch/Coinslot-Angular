app = angular.module('app', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: '/app/partials/home.html',
      controller: 'homeController'
    }).
    when('/detail/:id', {
      templateUrl: '/app/partials/detail.html',
      controller: 'detailController'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
])
.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode({enabled: true, requireBase: false}).hashPrefix('!');
}])
.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.headers['Content-Type'] = 'application/json';
}])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('blue')
});
