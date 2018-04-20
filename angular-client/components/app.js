angular.module('app')
.controller('AppCtrl', function($scope, $http) {


	this.signIn = function(user, password){
		$http({
		method: 'POST',
		url: '/user',
		data: {user : user, password: password},
		headers: {'Content-Type': 'application/json'}
		});	
	}


})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});