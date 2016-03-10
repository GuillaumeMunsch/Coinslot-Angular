app.controller('homeController', ['$http', '$scope', '$location', function($http, $scope, $location) {

  var apiPath = "http://localhost:3000/api/";

  $scope.query = {
    order: 'idcoinslot',
    limit: 10,
    page: 1
  };

  $http.get(apiPath + 'coinslot').
    success(function(data) {
      $scope.coinslots = data.coinslots;
      console.log("Ok");
    }).
    error(function(data) {
      console.log("Error on performing GET on /coinslots");
    });

  $scope.goToDetail = function(idcoinslot) {
    $location.path('/detail/' + idcoinslot);
  }

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

  // Get the payments with payment method for a specific coinslot
  $scope.getPaymentsDetails = function(id) {
    var path = apiPath + 'coinslot/' + id + '/payments/details' ;
    $http.get(path).
    success(function(data) {
      $scope.paymentsDetails = data.payments_details;
    }).
    error(function(data) {
      console.log("Error on performing GET on /coinslot/:" + id + '/payments');
    });
  }

  // Get the payments for a specific coinslot
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

  // Get infos for the coinslot (manufacturer and maintenance team)
  $scope.getInfos = function(id) {
    var path = apiPath + 'coinslot/' + id + '/infos' ;
    $http.get(path).
    success(function(data) {
      $scope.payments = data.coinslot;
    }).
    error(function(data) {
      console.log("Error on performing GET on /coinslot/:" + id + '/infos');
    });
    }

}]);
