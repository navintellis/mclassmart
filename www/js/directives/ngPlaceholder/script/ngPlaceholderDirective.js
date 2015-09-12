(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName).
  directive('ngPlaceholder', [

    function() {

      var linker = function($scope, element, attr) {
        $scope.$watch('placeholder', function() {
          element[0].placeholder = $scope.placeholder;
        });
      };

      return {
        restrict: 'A',
        scope: {
          placeholder: '@ngPlaceholder'
        },
        link: linker
      };

    }
  ]);
}(angular, classmart));
