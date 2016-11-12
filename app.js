(function(){
  'use strict'

var app = angular.module('MyApp',[]);

app.controller('DIController',DIController);
DIController.$inject = ['$scope','$filter'];

function DIController($scope, $filter,LoveFilter){
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

  app.controller('CustomFilter',CustomFilter)
  .filter('loves',LovesFilter)
  .filter('truth',TruthFilter);

  CustomFilter.$inject = ['$scope','lovesFilter'];

  function CustomFilter ($scope, lovesFilter){
    $scope.Amsg = function(){
      var msg = "Sandy Likes to eat healthy snacks at night!";
      return msg;
    };
    $scope.Trmsg = function(){
      var msg = "Sandy Likes to eat healthy snacks at night!";
      msg = lovesFilter(msg);
      return msg;
    };
  };

  function LovesFilter(){
    return function(input){
      input = input || "";
      input = input.replace("Likes","Loves");
      return input;
    };
  }

  function TruthFilter(){
    return function(input, target, replace){
      input = input || "";
      input = input.replace(target,replace);
      return input;
    }
  }

})();
