(function() {
    'use strict';

    angular
        .module('jhbookz')
        .controller('BankAccountDetailController', BankAccountDetailController);

    BankAccountDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'BankAccount', 'User', 'Operation'];

    function BankAccountDetailController($scope, $rootScope, $stateParams, previousState, entity, BankAccount, User, Operation) {
        var vm = this;

        vm.bankAccount = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhbookz:bankAccountUpdate', function(event, result) {
            vm.bankAccount = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
