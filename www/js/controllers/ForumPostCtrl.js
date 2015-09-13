(function(angular, classmart) {
    'use strict';
    angular.module(classmart.constants.moduleName).
    controller('ForumPostCtrl', ['$scope', '$state', '$ionicHistory',
        function($scope, $state, $ionicHistory) {
            $scope.routeConfig = classmart.enums.routeConfig;
            //alert($state.current.name);
        }
    ]);
}(angular, classmart));
