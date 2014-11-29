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
        .when('/clientes/edit/:id', {
            templateUrl: '/app/views/cliente-edit.html',
            controller: 'ClienteEditController'
        })
        .when('/clientes/adicionar', {
            templateUrl: '/app/views/cliente-edit.html',
            controller: 'ClienteEditController'
        })
        .when('/produtos', {
            templateUrl: '/app/views/produto-list.html',
            controller: 'ProdutoListController'
        })
        .when('/vendas', {
            templateUrl: '/app/views/venda-list.html',
            controller: 'VendaListController'
        })
        .otherwise({ 
            redirectTo: '/',
            templateUrl: '/app/views/home.html',
            controller: 'HomeController'
        });
}]);

