(function() {
	'use strict';

	//var app = angular.module('SpeakIzy', ['ngRoute']);

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {templateUrl: 'templates/home.html'})
			.when('/notre-approche', {templateUrl: 'templates/notre-approche.html'})
			.when('/qui-sommes-nous', {templateUrl: 'templates/qui-sommes-nous.html'})
			.when('/nos-tarifs', {templateUrl: 'templates/tarifs.html'})
			.when('/reservations', {templateUrl: 'templates/reservations.html'})
			.when('/connexion', {templateUrl: 'templates/connexion.html'})
			.when('/dashboard', {templateUrl: 'templates/dashboard.html'})
			.when('/registration-tutor', {templateUrl: 'templates/registration-tutor.html'})
			.when('/on-boarding-tutor', {templateUrl: 'templates/on-boarding-tutor.html'})
			.when('/registration-user', {templateUrl: 'templates/registration-user.html'})
			.when('/on-boarding', {templateUrl: 'templates/on-boarding.html', controller: "etapeCtrl"})
			.when('/pratique', {templateUrl: 'templates/pratique.html'})
			.otherwise({redirectTo: '/'});
	}]);

	app.controller('etapeCtrl', function($scope) {			
		$scope.etapes = function($index) {

			var etapes = angular.element(document.querySelectorAll('.etapes'));
			var bullets = angular.element(document.querySelectorAll('.select-etape'));
			
			for(var i = 0; i < etapes.length; i++) {
				var etape = angular.element(document.getElementById(etapes[i].id));
				var bullet = angular.element(document.getElementById(bullets[i].id));
				etape.removeClass("focusEtapes");
				bullet.removeClass("focus-etape");

				if(i == $index) {
					etape.addClass("focusEtapes");
					bullet.addClass("focus-etape");
				}
			}

		}				
	});

	
})();