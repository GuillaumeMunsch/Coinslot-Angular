app.controller('homeController', ['$http', '$scope', function($http, $scope) {

  var apiPath = "http://10.39.72.192:3000/api/";

  $http.get(apiPath + 'coinslot').
    success(function(data) {
      $scope.coinslots = data.coinslots;
    }).
    error(function(data) {
      console.log("Error on performing GET on /coinslots");
    });

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
<<<<<<< HEAD
      $http.get(path).
      success(function(data) {
        $scope.payments = data.coinslot;
      }).
      error(function(data) {
        console.log("Error on performing GET on /coinslot/:" + id + '/payments');
      });
=======
    $http.get(path).
    success(function(data) {
      $scope.payments = data.coinslot;
    }).
    error(function(data) {
      console.log("Error on performing GET on /coinslot/:" + id + '/infos');
    });
>>>>>>> baa3ecbad1da944b2c13be7c446b8e7bd2f12e61
  }

}]);
