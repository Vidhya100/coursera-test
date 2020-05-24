(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController'. LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];

  function LunchCheckController($scope, $filter){
    $scope.item = "";
  //  var x="Too much";
  //  var y="Enjoy";
    //k:number;

    $scope.changeMessage = function() {
     var total = calculateStringLength($scope.item);
    //  this.k = s.length ;
      };
      function calculateStringLength(string) {
        const words = string.split(' ');

        if(string.length > 3)
        {
           $scope.item = "Too much!";

        }
        else if (sting.length < 3) {
            $scope.item = "Enjoy!";
        }
        else {
          $scope.item = "Please enter data first!";
        }
      };
    }
    }
  }
})();
