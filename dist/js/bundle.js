"use strict";

angular.module("RPC", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state("selling", {
    url: "/",
    templateUrl: "views/selling.html",
    controller: "sellingController"
  }).state("sold", {
    url: "/sold",
    templateUrl: "views/sold.html",
    controller: "soldController"
  }).state("addExpense", {
    url: "/addExpense",
    templateUrl: "views/addExpense.html",
    controller: "addExpenseController"
  });
  $urlRouterProvider.otherwise("/");
});
"use strict";

angular.module("RPC").controller("addExpenseController", function ($scope, mainService) {
  $scope.expenses = mainService.getCustomExpenses();
  $scope.addExpense = function () {
    mainService.addNewExpense($scope.idInput, $scope.nameInput, $scope.costInput);
    $scope.idInput = "";
    $scope.nameInput = "";
    $scope.costInput = "";
  };
});
"use strict";

angular.module("RPC").controller("mainController", function ($scope, mainService) {
  $scope.getTotal = function () {
    setTimeout(function () {
      $scope.total = mainService.total();
      $scope.$apply();
    }, 2600);
  };
});
"use strict";

angular.module("RPC").controller("sellingController", function ($scope, mainService) {
  $scope.itemsForSale = mainService.getItemsForSale();
  $scope.addNewItem = function () {
    mainService.addNewItem($scope.idInput, $scope.nameInput, $scope.costInput);
    $scope.idInput = "";
    $scope.nameInput = "";
    $scope.costInput = "";
  };
  $scope.soldItem = function (id) {
    mainService.moveToSold();
  };
});
"use strict";

angular.module("RPC").controller("soldController", function ($scope, mainService) {
  $scope.itemsSold = mainService.getItemsSold();
});
"use strict";

angular.module("RPC").service("mainService", function () {
  var itemsForSale = [{
    id: 1,
    name: "MIDI Still",
    investment: 20,
    ebayFees: 20,
    payPalFees: 2,
    grossProfit: 150,
    netProfit: 110
  }, {
    id: 2,
    name: "Artisan Sewing Machine",
    investment: 120,
    ebayFees: 0,
    payPalFees: 0,
    shippingFees: 0,
    soldPrice: 550,
    grossProfit: 400,
    netProfit: 110
  }, {
    id: 3,
    name: "SoundStream Amp",
    investment: 10,
    ebayFees: 10,
    payPalFees: 23,
    shippingFees: 20,
    soldPrice: 240,
    grossProfit: 180,
    netProfit: 160
  }];

  var itemsSold = [{
    id: 78,
    name: "Green Gameboy",
    investment: 10,
    ebayFees: 10,
    payPalFees: 23,
    otherFees: 0.5,
    shippingFees: 10,
    soldPrice: 240,
    grossProfit: 180,
    netProfit: 186.50
  }];

  var expensesList = [{
    id: 1,
    name: "12x5 Boxes",
    cost: 5
  }, {
    id: 2,
    name: "Ebay Tape",
    cost: 0
  }, {
    id: 3,
    name: "9x9 Boxes",
    cost: 4
  }];

  this.getItemsForSale = function () {
    return itemsForSale;
  };

  this.getItemsSold = function () {
    return itemsSold;
  };

  this.getCustomExpenses = function () {
    return expensesList;
  };

  this.total = function () {
    var sum = 0;
    var exp = 0;
    for (var i = 0; i < itemsSold.length; i++) {
      sum += itemsSold[i].netProfit;
    }
    for (var j = 0; j < expensesList.length; j++) {
      exp += expensesList[j].cost;
    }
    console.log(sum, exp);
    return (sum - exp).toFixed(2);
  };

  this.addNewItem = function (id, name, cost) {
    itemsForSale.push({ id: id, name: name, investment: cost });
  };

  this.addNewExpense = function (id, name, cost) {
    console.log(cost);
    expensesList.push({ id: id, name: name, cost: Number(cost) });
    console.log(expensesList);
  };

  this.moveToSold = function () {};
});
"use strict";

angular.module("RPC").directive("dollar", function () {
  return {
    restrict: "E",
    templateUrl: "views/dollarSign.html",
    link: function link(scope, element, attributes) {
      element.on("click", function () {
        element.addClass("pulse");
        setTimeout(function () {
          element.removeClass("pulse");
        }, 3000);
      });
    }
  };
});
//# sourceMappingURL=bundle.js.map
