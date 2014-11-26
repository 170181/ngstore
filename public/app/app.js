angular.module('storeapp', ['ngResource', 'ngRoute']).config(['$routeProvider', function ($routeProvider) {
	$routeProvider
        .when('/', {
            templateUrl: '/app/views/home.html',
            controller: 'HomeController'
        })
        .when('/clientes', {
            templateUrl: '/app/views/cliente-list.html',
            controller: 'ClienteListController'
        })
        .when('/clientes/adicionar', {
            templateUrl: '/app/views/cliente-edit.html',
            controller: 'ClienteEditController'
        })
        .otherwise({ 
            redirectTo: '/',
            templateUrl: '/app/views/home.html',
            controller: 'HomeController'
        });
}]);

