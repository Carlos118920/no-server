angular.module("RPC").controller("mainController", function($scope, mainService){
  $scope.getTotal = function(){
    setTimeout(function(){
      $scope.total = mainService.total();
      $scope.$apply();
    }, 2600);
  }
})
