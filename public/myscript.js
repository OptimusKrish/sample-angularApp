  var app = angular.module('myapp', []);
  app.controller('tron', function($scope, $http) {
    $scope.loading = false;
    $scope.dict = false;
    $scope.error = false;
    $scope.dictionary = 'longman';
    $scope.search = function(name) {
      if(!name) return;
      $scope.loading = true;
      const url = ($scope.dictionary === 'longman') ? 'http://api.pearson.com/v2/dictionaries/entries?search=' : null;
      $http.get(`${url}${name}`)
      .then((result) => {
        $scope.loading = false;
        $scope.results = (result.data.results.length > 0) ? result.data.results : false;
        $scope.dict = true;
      }).catch((err) => {
        $scope.loading = false;
        $scope.err = err;
        $scope.dict = false;
        $scope.error = true;
      });
    }
  });