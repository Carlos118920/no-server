angular.module("RPC").controller("addExpenseController", function($scope, mainService){
  $scope.expenses = mainService.getCustomExpenses();
  $scope.addExpense = function(){
    mainService.addNewExpense($scope.idInput, $scope.nameInput, $scope.costInput)
    $scope.idInput = "";
    $scope.nameInput = "";
    $scope.costInput = "";
  }
})
