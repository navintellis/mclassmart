(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName)
    .controller('LearnersKattaCtrl', ['$scope', '$state', 'StudyContentService',
      function($scope, $state, StudyContentService) {
        var init = function() {
          StudyContentService.initStudyContentServiceCall(serviceSuccessCallback);
        },
          initDataAsPerRoute = function() {
            var currentState = $state.current,
              currentStateParams = $state.params;
            if (currentState.name === $scope.routeConfig.app_home_learnersKatta.state) {
              $scope.pageData.pageTitle = '';
              $scope.pageData.pageContentData = $scope.studyContent.subjects;
            } else if (typeof currentStateParams.id != "undefined") {

              if (currentState.name === $scope.routeConfig.app_kattasubject.state) {
                $scope.pageData.pageTitle = StudyContentService.getSelectedItemDataById(StudyContentService.enums.subjects, currentStateParams.id).title;
                $scope.pageData.pageContentData = StudyContentService.getDataById(StudyContentService.enums.chapters, currentStateParams.id);
              } else if (currentState.name === $scope.routeConfig.app_kattachapter.state) {
                $scope.pageData.pageTitle = StudyContentService.getSelectedItemDataById(StudyContentService.enums.chapters, currentStateParams.id).title;
                $scope.pageData.pageContentData = StudyContentService.getDataById(StudyContentService.enums.topics, currentStateParams.id);
              } else if (currentState.name === $scope.routeConfig.app_kattatopic.state) {
                var selectedItem = StudyContentService.getSelectedItemDataById(StudyContentService.enums.topics, currentStateParams.id);
                  $scope.pageData.pageTitle = selectedItem.title;
                $scope.pageData.pageContentData = selectedItem.content;
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
