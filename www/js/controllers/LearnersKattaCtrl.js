(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName)
    .controller('LearnersKattaCtrl', ['$scope', '$state', 'StudyContentService', 'HomeModuleService',
      function($scope, $state, StudyContentService, HomeModuleService) {
        var init = function() {
          StudyContentService.initStudyContentServiceCall(serviceSuccessCallback);
        },
          checkAndRouteAsPerHomeTabConfig = function() {
            if (!HomeModuleService.isTabActive(HomeModuleService.tabConfig.activeTab)) {
              HomeModuleService.selectTab(HomeModuleService.tabConfig.activeTab);
            }
          },
          initDataAsPerRoute = function() {
            var currentState = $state.current,
              currentStateParams = $state.params;
            if (currentState.name === $scope.routeConfig.app_home_learnersKatta.state) {
              checkAndRouteAsPerHomeTabConfig();
              $scope.pageData.pageTitle = '';
              $scope.pageData.pageContentData = $scope.studyContent.subjects;
            } else if (typeof currentStateParams.id != "undefined") {

              switch (currentState.name) {
                case $scope.routeConfig.app_kattasubject.state:
                  $scope.pageData.pageTitle = StudyContentService.getSelectedItemDataById(StudyContentService.enums.subjects, currentStateParams.id).title;
                  $scope.pageData.pageContentData = StudyContentService.getDataById(StudyContentService.enums.chapters, currentStateParams.id);
                  break;
                case $scope.routeConfig.app_kattachapter.state:
                  $scope.pageData.pageTitle = StudyContentService.getSelectedItemDataById(StudyContentService.enums.chapters, currentStateParams.id).title;
                  $scope.pageData.pageContentData = StudyContentService.getDataById(StudyContentService.enums.topics, currentStateParams.id);
                  break;
                case $scope.routeConfig.app_kattatopic.state:
                  var selectedItem = StudyContentService.getSelectedItemDataById(StudyContentService.enums.topics, currentStateParams.id);
                  $scope.pageData.pageTitle = selectedItem.title;
                  $scope.pageData.pageContentData = selectedItem.content;
                  break;
                default:
                  break;
              }

            }
          }, serviceSuccessCallback = function() {
            $scope.studyContent = StudyContentService.studyContentData.studyContent;
            initDataAsPerRoute();

          };

        $scope.routeConfig = classmart.enums.routeConfig;
        $scope.studyContent = [];
        $scope.pageData = {
          pageContentData: null,
          pageTitle: 'Not Present'
        };

        init();
      }
    ]);
}(angular, classmart));
