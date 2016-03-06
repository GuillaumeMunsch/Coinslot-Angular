app.controller('homeController', ['$http', '$scope', function($http, $scope) {

  var apiPath = "http://192.168.1.10:3000/api/";

  $http.get(apiPath + '/coinslot').
    success(function(data) {
      $scope.coinslots = data.coinslots;
    }).
    error(function(data) {
      console.log("Error on performing GET on /coinslots");
    });

  }]);
