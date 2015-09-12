(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName)
    .controller('MentorCtrl', ['$scope', '$timeout', '$ionicScrollDelegate',
      function($scope, $timeout, $ionicScrollDelegate) {
        $scope.flags = {
          showTime: false,
          hideTimeButton: false
        };

        var alternate,
          isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

        $scope.sendMessage = function() {
          alternate = !alternate;

          var d = new Date();
          //alert(d);
          d = d.toLocaleTimeString().replace(/:\d+ /, ' ');


          $scope.messages.push({
            userId: alternate ? '12345' : '54321',
            text: $scope.data.message,
            time: d
          });

          delete $scope.data.message;
          $ionicScrollDelegate.scrollBottom(true);

        };


        $scope.inputUp = function() {
          if (isIOS) $scope.data.keyboardHeight = 216;
          $timeout(function() {
            $ionicScrollDelegate.scrollBottom(true);
          }, 300);

        };

        $scope.inputDown = function() {
          if (isIOS) $scope.data.keyboardHeight = 0;
          $ionicScrollDelegate.resize();
        };

        $scope.closeKeyboard = function() {
          // cordova.plugins.Keyboard.close();
        };


          $scope.showTime = function(){
              $scope.flags.showTime = true;
              $scope.flags.hideTimeButton = false;
          };

        $scope.hideTime = function() {
          $scope.flags.hideTimeButton = true;
          $timeout(function() {
            $scope.flags.showTime = false;
          }, 1);
        };


        $scope.data = {};
        $scope.myId = '12345';
        $scope.messages = [];


        $scope.composeSaveCallback = function(message) {
          $scope.data.message = message;
          $scope.sendMessage();
        };


        /* // Compose Message Modal Code

          // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('js/directives/composeMessage/template/composeMessageModal.html', {
          scope: $scope
        }).then(function(modal) {
          $scope.composeMessageModal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeComposeMessageModal = function() {
          $scope.composeMessageModal.hide();
        };

        // Open the login modal
        $scope.openComposeMessageModal = function() {
          $scope.composeMessageModal.show();
        };

          $scope.sendFromComposeMessageModal= function(){
               $scope.closeComposeMessageModal();
              $scope.sendMessage();
          };*/

      }
    ]);
}(angular, classmart));
