(function(){
  'use strict'

var app = angular.module('MyApp',[]);

app.controller('DIController',DIController);
DIController.$inject = ['$scope','$filter'];

function DIController($scope, $filter){
  $scope.name2 = "sandy";

  $scope.upper = function(){
    var uprCase = $filter('uppercase');
    $scope.name2 = uprCase($scope.name2);
  }
};

app.controller('nameCalcController', function($scope){
    $scope.name1 = "";
    $scope.totalVal = 0;
    $scope.displaynumeric = function(){
        var totalNameVal=calculateNumericForString($scope.name1);
        $scope.totalVal = totalNameVal;
    };

    function calculateNumericForString(string){
      var totalStringVal = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringVal += string.charCodeAt(i);
      }

      return totalStringVal;
    }

  });

})();
