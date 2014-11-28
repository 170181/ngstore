angular.module("storeapp").controller("ClienteListController", ['$scope', '$log', 'ClienteService', function($scope, $log, ClienteService) {
    
    // Construtor do controlador.
    ClienteService.listar()
        .then(function(list) {
            $scope.clientes = list;
            $log.log(list);
        })
        .catch(function(error) {
            alert("Erro ao listar os clientes cadastrados. Motivo: " + error.statusText);
            $log.log(error);
        });
    
}])

