(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName).
  controller('HomeCtrl', ['$scope', '$state',
    function($scope, $state) {

      var routeConfig = classmart.enums.routeConfig;
      $scope.tabConfig = {
        tabs: {
          learnerskatta: {
            tabId: 'learnerskatta',
            title: 'Katta',
            state: routeConfig.app_home_learnersKatta.state
          },
          forum: {
            tabId: 'forum',
            title: 'Forum',
            state: routeConfig.app_home_forum.state
          },
          quiz: {
            tabId: 'quiz',
            title: 'Quiz',
            state: routeConfig.app_home_quiz.state
          }
        },
        activeTab: 'learnerskatta'
      };

      $scope.selectTab = function(tabId) {
        $scope.tabConfig.activeTab = tabId;
        $state.go($scope.tabConfig.tabs[tabId].state);
      };
      $scope.isTabActive = function(tabId) {
        return ($state.current.name === $scope.tabConfig.tabs[tabId].state);
      };

    }
  ]);
}(angular, classmart));
