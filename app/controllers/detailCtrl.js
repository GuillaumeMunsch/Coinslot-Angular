app.controller('detailController', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams) {

  $scope.coinslotId = $routeParams.id;
  var apiPath = "http://10.39.72.192:3000/api/";

  $scope.getCoinslot = function(id) {
    var path = apiPath + 'coinslot/' + id;
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
