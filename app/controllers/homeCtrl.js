app.controller('homeController', ['$http', '$scope', function($http, $scope) {

  var apiPath = "http://192.168.1.10:3000/api/";

  $http.get(apiPath + 'coinslot').
    success(function(data) {
      $scope.coinslots = data.coinslots;
    }).
    error(function(data) {
      console.log("Error on performing GET on /coinslots");
    });
  $http.get(apiPath + '/')

  $scope.getCoinslot = function(id) {
    var path = apiPath + 'coinslot/' id;
    $http.get(path).
    success(function(data) {
      $scope.coinslot = data.coinslot;
    }).
    error(function(data) {
      console.log("Error on performing GET on /coinslot/:" + id);
    });
  }

  $scope.getPayments = function(id) {
    var path = apiPath + 'coinslot/' + id + '/payments' ;
    $http.get(path).
    success(function(data) {
      $scope.payments = data.coinslot;
    }).
    error(function(data) {
      console.log("Error on performing GET on /coinslot/:" + id + '/payments');
    });
  }

  $scope.getInfos = function(id) {
    var path = apiPath + 'coinslot/' + id + '/infos' ;
    $http.get(path).
    success(function(data) {
      $scope.payments = data.coinslot;
    }).
    error(function(data) {
      console.log("Error on performing GET on /coinslot/:" + id + '/payments');
    });
  }

}]);
