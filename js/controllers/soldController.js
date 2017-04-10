angular.module("RPC").controller("soldController", function($scope, mainService){
  $scope.itemsSold = mainService.getItemsSold();
})
