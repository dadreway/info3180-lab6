var app = angular.module("myShoppingList",[]);
app.controller("myCtrl", funtion(scope){
	$scope.products = ["milk","chesse","bread"];
	$scope.addItem = function (){
		$scope.products.push($scope.addMe);
	}
});
