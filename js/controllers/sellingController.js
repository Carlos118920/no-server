angular.module("RPC").controller("sellingController", function($scope, mainService){
  $scope.itemsForSale = mainService.getItemsForSale();
  $scope.addNewItem = function(){
    mainService.addNewItem($scope.idInput, $scope.nameInput, $scope.costInput)
    $scope.idInput = "";
    $scope.nameInput = "";
    $scope.costInput = "";
  }

  $scope.soldItem = function(item, ebayFees, shippingFees, otherFees, soldPrice){
    mainService.moveToSold(item, ebayFees, shippingFees, otherFees, soldPrice);
  }

  $scope.status = mainService.status;
})
