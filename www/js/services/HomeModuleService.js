(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName)
    .factory('HomeModuleService', ['$state',
      function($state) {
        var routeConfig = classmart.enums.routeConfig,
          tabConfig = {
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
          },
          selectTab = function(tabId) {
            tabConfig.activeTab = tabId;
            $state.go(tabConfig.tabs[tabId].state);
          },
          isTabActive = function(tabId) {
            return ($state.current.name === tabConfig.tabs[tabId].state);
          };
        return {
          tabConfig: tabConfig,
          selectTab: selectTab,
          isTabActive: isTabActive
        };
      }
    ]);
}(angular, classmart));
