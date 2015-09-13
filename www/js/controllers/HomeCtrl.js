(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName).
  controller('HomeCtrl', ['$scope', '$state', 'HomeModuleService',
    function($scope, $state, HomeModuleService) {

        //var routeConfig = classmart.enums.routeConfig;
      $scope.tabConfig = HomeModuleService.tabConfig;

      $scope.selectTab = HomeModuleService.selectTab;
      $scope.isTabActive = HomeModuleService.isTabActive;

    }
  ]);
}(angular, classmart));
