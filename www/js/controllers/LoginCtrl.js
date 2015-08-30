(function(angular,classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName).
  controller('LoginCtrl', ['$scope' , '$state',
    function($scope,$state) {
        var routeConfig = classmart.enums.routeConfig;
        $scope.doLogin=function(){
            $state.go(routeConfig.app_home.state);
        };
    }
  ]);
}(angular,classmart));
