var app = angular.module('madMod');

app.controller('formCtrl', function($scope, madFactory){

      console.log("form controller as loaded")
      $scope.addInput = function(words) {

          console.log(words);
          madFactory.setInput(words);

      }

});
