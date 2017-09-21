'use strict';

battleshipApp.controller('BattleshipController', ['$scope', function($scope) {

    $scope.color = 'white';

    $scope.buttonClick = function(x, y) {
        
