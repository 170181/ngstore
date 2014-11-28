/**
 * Serviço para validação de formulários.
 */
angular.module('storeapp').factory('FormService', ['$log', function($log) {

    var FormService = function(){}

    /**
     * Retorna a classe CSS associada ao estado atual de validação de um campo.
     * @param ngModelController Referência um campo no formulário.
     * @returns {{has-error has-feedback: (boolean|Ic.$invalid|*|ce.$invalid|ce.$setValidity.$invalid|FormController.$invalid), has-success has-feedback: (boolean|Ic.$valid|*|ce.$valid|ce.$setValidity.$valid|FormController.$valid)}}
     */
    FormService.getCssClass = function(ngModelController) {
        return {
            'has-error': ngModelController.$invalid && ngModelController.$dirty,
            'has-success': ngModelController.$valid && ngModelController.$dirty
        }
    };

    /**
     * Verifica se um campo no formulário está em um estado inválido.
     * @param ngModelController Campo do formulário a ser verificado.
     * @returns true se o campo estiver em um estado inválido. false caso contrário.
     */
    FormService.isInvalid = function(ngModelController) {
        return ngModelController.$invalid && ngModelController.$dirty;
    };

    /**
     * Verifica se um campo está obedecendo a todas as regras de validação impostas a ele.
     * @param ngModelController Campo do formulário a ser verificado.
     * @returns true se o campo estiver em um estado válido. false caso contrário.
     */
    FormService.isValid = function(ngModelController) {
        return ngModelController.$valid;
    };

    /**
     * Verifica se um formulário está no estado "pristine".
     * @param formController
     * @returns {*}
     */
    FormService.isPristine = function(formController) {
        return formController.$pristine;
    }

    /**
     * Coloca todos os campos do formulário em estado dirty.
     */
    FormService.markDirty = function(form) {
        for(var prop in form) {
            if (form.hasOwnProperty(prop) && prop.indexOf('$') < 0) {
                form[prop].$dirty = true;
            }
        }
    };

    /**
     * Coloca o formulário no estado pristine, isto é, estado inicial no qual o usuário ainda não editou nenhum
     * campo.
     * @param form
     */
    FormService.setPristine = function(form) {
        form.$setPristine();
    }

    /**
     * Coloca o formulário no estado inicial de ediçao.
     */
    FormService.resetForm = function(form) {
        form.$setPristine();
    }

    /**
     * Verifica se os campos do formulário contem somente válidos e se todos os campos requeridos foram
     * preenchidos.
     * @returns true caso o formulário esteja em um estado consistente. false caso contrário.
     */
    FormService.formularioValido = function(ngModelController) {
        return ngModelController.$dirty &&
            ngModelController.$valid;
    }
    

    return FormService;
}]);