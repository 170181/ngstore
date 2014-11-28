angular.module('storeapp').controller('HomeController', ['$scope', '$log', 'ClienteService', function ($scope, $log, ClienteService) {

    $scope.clientesCount = 0;
    $scope.produtosCount = 0;
    $scope.vendasCount = 0;
    
    ClienteService.calcularTotalCadastrados()
        .then(function(responseObj) {
            $scope.clientesCount = responseObj.count;
        })
        .catch(function(error) {
            $log.log(error);
        });
    
}]);