(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName).
  controller('FacultyCtrl', ['$scope', '$ionicActionSheet',
    function($scope, $ionicActionSheet) {
      $scope.groups = [];
      for (var i = 0; i < 10; i++) {
        $scope.groups[i] = {
          name: 'Group ' + i,
          items: []
        };
        for (var j = 0; j < 5; j++) {
          $scope.groups[i].items.push(i + '-' + j);
        }
      }
      $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
          $scope.shownGroup = null;
        } else {
          $scope.shownGroup = group;
        }
      };
      $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
      };

    }
  ]);
}(angular, classmart));
