(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName).
  directive('chatMessageBox', ['$timeout',
    function($timeout) {

      var linker = function($scope, element, attr) {
        element.bind('focus', function(e) {
          if ($scope.onFocus) {
            $timeout(function() {
              $scope.onFocus();
            });
          }
        });
        element.bind('blur', function(e) {
          if ($scope.onBlur) {
            $timeout(function() {
              $scope.onBlur();
            });
          }
        });
        element.bind('keydown', function(e) {
          if (e.which == 13) {
            if ($scope.returnClose) {
              element[0].blur();
            }
            if ($scope.onReturn) {
              $timeout(function() {
                $scope.onReturn();
              });
            }
          }
        });
      };

      return {
        restrict: 'A',
        scope: {
          'returnClose': '=',
          'onReturn': '&',
          'onFocus': '&',
          'onBlur': '&'
        },
        link: linker
      };

    }
  ]);
}(angular, classmart));
