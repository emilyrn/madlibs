var app = angular.module('madMod');

app.factory('madFactory', function(){

    var input = {};

    function setInput(words){

        input = words;
        console.log(input);

    }
    function returnInput(){

      return input

    }
      return {

        setInput: setInput,
        returnInput: returnInput

    };

})
