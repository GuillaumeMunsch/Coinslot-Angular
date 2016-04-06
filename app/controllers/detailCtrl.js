app.controller('detailController', ['$http', '$scope', '$routeParams', '$mdDialog', function($http, $scope, $routeParams, $mdDialog) {

  $scope.coinslotId = $routeParams.id;
  var apiPath = "http://localhost:3000/api/";

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
        console.log($scope.payments);
      }).
      error(function(data) {
        console.log("Error on performing GET on /coinslot/:" + id + '/payments');
      });
  }

  $scope.getInfos = function(id) {
    var path = apiPath + 'coinslot/' + id + '/infos' ;
      $http.get(path).
      success(function(data) {
        $scope.infos = data.infos[0];
      }).
      error(function(data) {
        console.log("Error on performing GET on /coinslot/:" + id + '/payments');
      });
  }

  $scope.getPaymentsInfos = function(id) {
    var path = apiPath + '/coinslot/' + $scope.coinslotId + '/payments/details' ;
      $http.get(path).
      success(function(data) {
        $scope.paymentDetail = data.coinslot;
      }).
      error(function(data) {
        console.log("Error on performing GET on /coinslot/:" + id + '/payments');
      });
  }

  $scope.openManufacturerDialog = function() {
      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title('Manufacturer infos')
          .textContent('Name: ' + $scope.infos.name + ', ' +
            'Address: ' + $scope.infos.address + ', ' +
            'Phone: ' + $scope.infos.fk_id_manufacturer)
          .ok('OK')
      );
    };

    $scope.openMaintainceDialog = function() {
        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Maintaince crew infos')
            .textContent('Phone: ' + $scope.infos.fk_id_maintaince_crew)
            .ok('OK')
        );
      };

  $scope.getInfos($scope.coinslotId);
  $scope.getPayments($scope.coinslotId);
}]);
