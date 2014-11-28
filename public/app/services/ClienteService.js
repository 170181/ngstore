angular.module("storeapp").factory("ClienteService", ["$resource", function($resource) {
    
    // Utiliza o serviço $resource para facilitar o consumo da api REST relacionada ao model Cliente.
    var ClienteService = $resource('/api/clientes/:id');
    
    ClienteService.listar = function() {
        return ClienteService.query().$promise;
    }
    
    ClienteService.salvar = function(clienteObj) {
        return ClienteService.save(clienteObj).$promise;
    }
    
    ClienteService.buscarPorId = function(clienteId) {
        return ClienteService.get({id:clienteId}).$promise;
    }
    
    return ClienteService;
    
}]);
