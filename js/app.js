var app = angular.module("myShoppingList",[]);
app.controller("myCtrl", funtion(scope){
	$scope.products = ["milk","chesse","bread"];
	$scope.addItem = function (){
		$scope.errortext = "";
		if (!$scope.addMe){return;}
		if ($scope.products.indexOf($scope.addMe)== -1){
		$scope.products.push($scope.addMe);
		}else{
			$scope.errortext = "The item is already on your Shopping List.";
		}

	}
	$scope.removeItem = funtion(x){
		$scope.products.splice(x,1);
	}
});
