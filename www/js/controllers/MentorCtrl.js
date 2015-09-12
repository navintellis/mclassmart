(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName)
    .controller('MentorCtrl', ['$scope', '$timeout', '$ionicScrollDelegate',
      function($scope, $timeout, $ionicScrollDelegate) {
        $scope.flags = {
          showTime: false
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

        $scope.hideTime = function() {
          $scope.flags.showTime = false;
        };


        $scope.data = {};
        $scope.myId = '12345';
        $scope.messages = [];
      }
    ]);
}(angular, classmart));
