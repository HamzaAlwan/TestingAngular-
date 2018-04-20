angular.module('app')
.controller('AppCtrl', function($scope, $http) {


	this.singIn = function(name, password){
		$http({
		method: 'POST',
		url: '/user',
		data: {name : name, password: password},
		headers: {'Content-Type': 'application/json'}
		});	
	}


})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});