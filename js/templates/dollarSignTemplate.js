angular.module("RPC").directive("dollar", function(){
  return {
    restrict: "E",
    templateUrl: "views/dollarSign.html",
    link: function(scope, element, attributes){
      element.on("click",function(){
        element.addClass("pulse");
        setTimeout(function(){
          element.removeClass("pulse");
        }, 3000)
      })
    }
  }
})
