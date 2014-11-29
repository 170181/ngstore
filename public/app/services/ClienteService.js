angular.module("storeapp").factory("ClienteService", ["$resource", function($resource) {
    
    // Utiliza o serviço $resource para facilitar o consumo da api REST relacionada ao model Cliente.
    var ClienteService = $resource(
        '/api/clientes/:id', // URL padrão da api REST.
        null, // Parâmetros para a requisição. Opcional.
        { 
            'count': {method: "GET", url: "/api/count/clientes"}  // Ação customizada.
        }
    );
    
    ClienteService.listar = function() {
        return ClienteService.query().$promise;
    }
    
    ClienteService.salvar = function(clienteObj) {
        return ClienteService.save(clienteObj).$promise;
    }
    
    ClienteService.buscarPorId = function(clienteId) {
        return ClienteService.get({id:clienteId}).$promise;
    }
    
    ClienteService.calcularTotalCadastrados = function() {
        // ClienteService.count() invoca a ação 'count' definida no topo do arquivo durante a chamada do serviço $resource.
        return ClienteService.count().$promise;
    }
    
    ClienteService.excluirCliente = function(clienteId) {
        return ClienteService.delete({id:clienteId}).$promise;
    }
    
    return ClienteService;
    
}]);
