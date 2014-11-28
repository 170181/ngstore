angular.module("storeapp").controller("ClienteEditController", ['$scope', '$log', '$location', '$routeParams', 'ClienteService', 'FormService', function($scope, $log, $location, $routeParams, ClienteService, FormService) {

    $scope.FormService = FormService;
    $scope.cliente = {};
    
    if($routeParams.id != null) {
        ClienteService.buscarPorId($routeParams.id)
            .then(function(responseObj) {
                $scope.cliente = responseObj;
            })
            .catch(function(error) {
                alert("Não foi possível abrir o cliente com id " + $routeParams.id + " para edição. Motivo: " + error.data);
                $log.log(error);
                $location.path("/clientes");
            });
    }
    
    /**
     * Envia os dados do cliente sob edição para o servidor remoto.
     */
    $scope.salvar = function() {
        ClienteService.salvar($scope.cliente)
            .then(function(responseObj) {
                $log.log("Dados do cliente gravados corretamente no servidor remoto.");
                alert("Dados do cliente gravados com sucesso.");

                // Redireciona para a tela de listagem de clientes, utilizando o mecanismo de roteamento do AngularJS.
                $location.path("/clientes");
            })
            .catch(function(error) {
                alert("Ocorreu um erro ao enviar os dados do cliente para o servidor. " + error.data);
                $log.log(error);
            });
    }
    
    /**
     * Cancela a edição do cliente. 
     */
    $scope.cancelar = function() {
        if(confirm("Deseja realmente cancelar a edição do cliente?")) {
            $location.path("/clientes");
        }
    }

}]);

