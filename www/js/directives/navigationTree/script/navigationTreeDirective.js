(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName).
  directive('navigationTree', [

    function() {

      var linker = function($scope, element, attr) {
        //scope attribute mapping
        $scope.pageDataList = $scope.pageDataList;
        $scope.targetState = attr.targetState;

        //scope functions
        $scope.getIndexNo = function(indexNo) {
          if (typeof indexNo != "undefined") {
            return indexNo + '. ';
          }
        };
      };

      return {
        restrict: 'E',
        replace: true,
        scope: {
          'pageDataList': '='
        },
        templateUrl: 'js/directives/navigationTree/template/navigationTreeTemplate.html',
        link: linker
      };

    }
  ]);

}(angular, classmart));
