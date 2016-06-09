'use strict';

angular.module('msen', ['ngResource','ui.bootstrap'])

    .controller('MainCtrl', ['$scope', '$filter', 'Outlets', 'Contacts', function($scope, $filter, Outlets, Contacts) {
        
		$scope.currentPage = 1;
        $scope.itemsPerPage = 25;
		
		$scope.contacts = [];
        $scope.outlets = [];

        $scope.predicate = 'firstName';
        $scope.reverse = false;
        $scope.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };


        $scope.getContacts = function () {
            Contacts
                .query()
                .$promise
                .then(
                    function (data) {
                        $scope.totalItems = data.length;
                        $scope.contacts = data;
                    })
                .finally(function () {
                    $scope.$emit('ContactsLoad');
                });
        };

        $scope.getOutlets = function () {
            Outlets
                .query()
                .$promise
                .then(
                    function (data) {
                        $scope.outlets = data;
                    })
                .finally(function () {
                    $scope.$emit('OutletsLoad');
                });
        };

        $scope.assigntheOutlet = function () {
            angular.forEach($scope.contacts, function (contact, i) {
                $scope.contacts[i].outletName = $filter('filter')($scope.outlets, {id:contact.outletId}).shift().name;
            });
        };

        
        $scope.$on('ContactsLoad', $scope.getOutlets);
        $scope.$on('OutletsLoad', $scope.assigntheOutlet);
        $scope.getContacts();
    }])
    .filter('offset', function() {
        return function(input, start) {
            start = +start;
            return input.slice(start);
        };
    })
    .directive('contactTable', function() {
        return {
            restrict:'E',
            scope: true,
            templateUrl: 'view/table.html'
        };
    })
    .factory('Outlets', ['$resource', function($resource) {
        return $resource('/Outlets.json', {}, {});
    }])
    .factory('Contacts', ['$resource', function($resource) {
        return $resource('/Contacts.json', {}, {});
    }]);