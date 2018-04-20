angular.module('app')
.controller('AppCtrl', function($scope, $http) {


	this.signIn = function(user, password){
		$http({
		method: 'POST',
		url: '/user',
		data: {user : user, password: password},
		headers: {'Content-Type': 'application/json'}
		});	
	},

	this.reset = function(){
    $scope.user = "";
    $scope.password = "";
}

})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});