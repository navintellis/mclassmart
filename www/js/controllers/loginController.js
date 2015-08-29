(function(angular,classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName).
  controller('LoginController', ['$scope', '$state',
    function($scope,$state) {
        $scope.doLogin=function(){
            $state.go('app.home');
        };
    }
  ]);
}(angular,classmart));
