var app = angular.module('madMod');

app.controller('outputCtrl', function($scope, madFactory){

    $scope.print = madFactory.returnInput();

})
