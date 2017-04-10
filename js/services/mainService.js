angular.module("RPC").service("mainService", function(){
var itemsForSale = [
  {
  id: 1,
  name: "MIDI Still",
  investment: 20,
  ebayFees: 20,
  payPalFees: 2,
  grossProfit: 150,
  netProfit: 110
  },
  {
    id: 2,
    name: "Artisan Sewing Machine",
    investment: 120,
    ebayFees: 0,
    payPalFees: 0,
    shippingFees: 0,
    soldPrice: 550,
    grossProfit: 400,
    netProfit: 110
  },
  {
    id: 3,
    name: "SoundStream Amp",
    investment: 10,
    ebayFees: 10,
    payPalFees: 23,
    shippingFees: 20,
    soldPrice: 240,
    grossProfit: 180,
    netProfit: 160
  }
];

var itemsSold = [
  {
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
  }
]

var expensesList = [
  {
    id: 1,
    name: "12x5 Boxes",
    cost: 5
  },
  {
    id: 2,
    name: "Ebay Tape",
    cost: 0
  },
  {
    id: 3,
    name: "9x9 Boxes",
    cost: 4
  }
]

this.getItemsForSale = function(){
  return itemsForSale;
}

this.getItemsSold = function(){
  return itemsSold;
}

this.getCustomExpenses = function(){
  return expensesList;
}

this.total = function(){
  var sum = 0;
  var exp = 0;
  for(var i = 0; i < itemsSold.length; i++){
    sum += Number(itemsSold[i].netProfit);
  }
  for(var j = 0; j < expensesList.length; j++){
    exp += expensesList[j].cost;
  }
  return (sum - exp).toFixed(2);
}

this.addNewItem = function(id, name, cost){
  itemsForSale.push({id: id, name: name, investment: cost});
}

this.addNewExpense = function(id, name, cost){
  expensesList.push({id: id, name: name, cost: Number(cost)});
}

this.moveToSold = function(item, ebayFees, shippingFees, otherFees, soldPrice){
  itemsSold.push({id: item.id, name: item.name, investment: item.investment, ebayFees: ebayFees, shippingFees: shippingFees, otherFees: otherFees, soldPrice: soldPrice, payPalFees: (0.30 + (soldPrice * 0.029)).toFixed(2), grossProfit: (soldPrice - item.investment).toFixed(2) , netProfit: (soldPrice - item.investment - ebayFees - shippingFees - otherFees - (0.30 + (soldPrice * 0.029)).toFixed(2)).toFixed(2)})
  for(var i = 0; i < itemsForSale.length; i++){
    
  }
}
})
