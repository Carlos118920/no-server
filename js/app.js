angular.module("RPC", ["ui.router"]).config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state("selling", {
      url: "/",
      templateUrl: "views/selling.html",
      controller: "sellingController"
    })
    .state("sold", {
      url: "/sold",
      templateUrl: "views/sold.html",
      controller: "soldController"
    })
    .state("addExpense",{
      url: "/addExpense",
      templateUrl: "views/addExpense.html",
      controller: "addExpenseController"
    })
    $urlRouterProvider.otherwise("/");
  })
