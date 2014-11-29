angular.module("storeapp").controller("ClienteListController", ['$scope', '$log', 'ClienteService', function($scope, $log, ClienteService) {
        
    /**
     * Atualiza a lista de clientes.
     **/
    $scope.atualizarLista = function() {
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
    }
    
    
    /**
     * Excluir um cliente do banco de dados.
     **/
    $scope.excluir = function(id) {
        ClienteService.excluirCliente(id)
            .then(function(response) {
                alert("Cliente excluído!");
                $scope.atualizarLista();
            })
            .catch(function(error) {
                alert("Erro ao excluir o cliente. Motivo: " + angular.toJson(error));
                $log.log(error);
            });
    }
    
    
    // Instruções executadas fora de um método ou função fazem parte do construtor do controlador.
    $scope.atualizarLista();
    
}])

