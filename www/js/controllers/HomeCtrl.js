(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName).
  controller('HomeCtrl', ['$scope', '$state',
    function($scope, $state) {

      var routeConfig = classmart.enums.routeConfig;
      $scope.tabConfig = {
        learnerskatta: {
          title: 'Learners Katta',
          state: routeConfig.app_home_learnersKatta.state
        },
        forum: {
          title: 'Forum',
          state: routeConfig.app_home_forum.state
        },
        quiz: {
          title: 'Quiz',
          state: routeConfig.app_home_quiz.state
        }
      };

      $scope.selectTab = function(state) {
        $state.go(state);
      };

    }
  ]);
}(angular, classmart));
