angular.module("storeapp").controller("ClienteEditController", ['$scope', '$log', 'ClienteService', function($scope, $log, ClienteService) {

    $scope.cliente = {};
    
    /**
     * Envia os dados do cliente sob edição para o servidor remoto.
     */
    $scope.salvar = function() {
        ClienteService.salvar($scope.cliente).then(function(responseObj) {
            $log.log("Dados do cliente gravados corretamente no servidor remoto.");
            alert("Dados do cliente gravados com sucesso.");
        })
        .catch(function(error) {
            alert("Ocorreu um erro ao enviar os dados do cliente para o servidor. " + error.statusText);
            $log.log(error);
        })
    }

}]);

