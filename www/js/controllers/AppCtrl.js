(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName)
    .controller('AppCtrl', ['$scope', '$ionicModal', '$timeout', '$ionicHistory', '$state', 'NotificationQuickLinksService',
      function($scope, $ionicModal, $timeout, $ionicHistory, $state, NotificationQuickLinksService) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login_modal.html', {
          scope: $scope
        }).then(function(modal) {
          $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function() {
          $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function() {
          $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
          console.log('Doing login', $scope.loginData);

          // Simulate a login delay. Remove this and replace with your login
          // code if using a login system
          $timeout(function() {
            $scope.closeLogin();
          }, 1000);
        };



        //Classmart code starts from here
        $scope.screenConfig = classmart.enums.screenConfig;
        $scope.routeConfig = classmart.enums.routeConfig;
        $scope.console = console;
        $scope.$state = $state;


        $scope.history = {
          myGoBack: function() {
            $ionicHistory.goBack();
          },
          getLastItem: function() {
            /*if ($ionicHistory.viewHistory().backView)
            return $ionicHistory.viewHistory().backView.title;*/
            return $ionicHistory.backTitle();
          },
          isHistoryPresent: function() {
            return !(!$ionicHistory.backTitle());
          }
        };


        $scope.getScreenNotifCount = function(screenId) {
          return NotificationQuickLinksService.getNotificationCountByScreenId(screenId);
        };
        $scope.notificationQuickLinks = NotificationQuickLinksService.data.notificationQuickLinks;

      }
    ]);
}(angular, classmart));
