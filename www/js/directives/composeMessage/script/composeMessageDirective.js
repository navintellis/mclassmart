(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName).
  directive('composeMessage', ['$ionicModal',
    function($ionicModal) {

      var validateFunctionAndExecute = function(functionObj, paramListArray) {
        if (typeof functionObj === 'function') {
          paramListArray = paramListArray || [];
          functionObj.apply(this, paramListArray);
        }
      },
        linker = function($scope, element, attr) {

          $scope.message = $scope.message || '';

          // Compose Message Modal Code
          $ionicModal.fromTemplateUrl('js/directives/composeMessage/template/composeMessageModal.html', {
            scope: $scope,
            backdropClickToClose: false
          }).then(function(modal) {
            $scope.composeMessageModal = modal;
          });

          $scope.closeComposeMessageModal = function() {
            $scope.composeMessageModal.hide();
            validateFunctionAndExecute($scope.onClose);
          };

          $scope.openComposeMessageModal = function() {
            $scope.composeMessageModal.show();
            validateFunctionAndExecute($scope.onOpen);

          };


          $scope.sendFromComposeMessageModal = function() {
            $scope.closeComposeMessageModal();
            validateFunctionAndExecute($scope.onSave, [$scope.message]);
          };




        };

      return {
        restrict: 'E',
        replace: true,
        scope: {
          title: '@',
          placeholder: "@",
          message: '=',
          onOpen: '=',
          onClose: '=',
          onSave: '='
        },
        templateUrl: 'js/directives/composeMessage/template/composeMessageTemplate.html',
        link: linker
      };

    }
  ]);
}(angular, classmart));
