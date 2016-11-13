(function(){
  'use strict'

var app = angular.module('MyApp',[]);

 // Dependency Injection -- START
app.controller('DIController',DIController);
DIController.$inject = ['$scope','$filter'];

function DIController($scope, $filter,LoveFilter){
  $scope.name2 = "sandy";

  $scope.upper = function(){
    var uprCase = $filter('uppercase');
    $scope.name2 = uprCase($scope.name2);
  }
};
// Dependency Injection --END

// Name Calculator -- START
app.controller('nameCalcController',nameCalcController);
nameCalcController.$inject =['$scope'];

function nameCalcController($scope){
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

  };
// Name Calculator -- END
// Custom Filter -- START
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
// Custom Filter -- END
// Watch Counter --START
app.controller('CounterController', CounterController);
CounterController.$inject = ['$scope'];
function CounterController($scope){
  $scope.onceCounter = 0;
  $scope.counter = 0;

  $scope.noOfWatch = function(){
    console.log('# of Watchers: ',$scope.$$watchersCount);
  };
  $scope.onceCounterr = function(){
    $scope.onceCounter = 1;
  };

  $scope.upCounter = function(){
    $scope.counter++;
  };
  // $scope.$watch(function(){
  //   console.log("Digest Loop Fired!");
  // });
      // $scope.$watch('onceCounter',function(newVal, oldVal){
      //   console.log('onceCounter old Value: ',oldVal);
      //   console.log('onceCounter new Value: ',newVal);
      // });
      //
      // $scope.$watch('counter',function(newVal, oldVal){
      //   console.log('counter old Value: ',oldVal);
      //   console.log('counter new Value: ',newVal);
      // });

};
// Watch Counter -- End

app.controller('BindingController',BindingController);
BindingController.$inject = ['$scope'];

function BindingController($scope){
  $scope.firstName = "Sandeep";
  //$scope.lastName = "Kumar";
//  $scope.fullName = "";

  $scope.showNoOfWatchers = function(){
    console.log("# of watchers: ",$scope.$$watchersCount);
  };

  $scope.setFullName = function(){
    $scope.fullName = $scope.firstName+" "+"Kumar";
  };

  $scope.logFirstName = function(){
      console.log('First Name: ',$scope.firstName);
  };

  $scope.logFullName = function(){
      console.log('Full Name: ',$scope.fullName);
  };

};
})();
