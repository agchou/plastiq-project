'use strict';


var plastiqApp = angular.module('plastiqApp', ['ngPlacesAutocomplete']);


plastiqApp.factory('PayeeService', function () {

    var db = [];
    var PayeeService = {};

    PayeeService.create = function (payee) {

        // TODO: Validate input 'payee' object
        // TODO: Handle duplicate entries

        db.push(payee)
    };

    PayeeService.get = function () {

        return db;
    };

    return PayeeService;
})


plastiqApp.controller('PayeeCtrl', ['$scope', 'PayeeService', function ($scope, Payee) {

    $scope.payees = Payee.get();

    $scope.payee = {};
    $scope.business = true;

    $scope.placeholderText = function () {

        return $scope.business ?
            'What business do you want to pay by card?' :
            '';
    };

    $scope.togglePayeeType = function () {

    };

    $scope.createPayee = function (data) {

        data = data || {};

        var inputField = document.getElementsByClassName('payee-input-field')[0];

        $scope.payee = {
            name: data.name || inputField.value,
            address: data.formatted_address || 'Address not provided.',
            type: $scope.business ? 'business' : 'person'
        }

        $scope.payee.active = data.formatted_address ? true : false;

        if (!$scope.payee.name) {

            // TODO: Handle error

            return;
        }

        Payee.create($scope.payee);

        // Resets value of input and payee on create success

        $scope.payee = {};
        inputField.value = '';
    };
}]);
