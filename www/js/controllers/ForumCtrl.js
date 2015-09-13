(function(angular, classmart) {
    'use strict';
    angular.module(classmart.constants.moduleName).
    controller('ForumCtrl', ['$scope', '$state', '$ionicHistory',
        function($scope, $state, $ionicHistory ) {
            $scope.routeConfig = classmart.enums.routeConfig;

        }
    ]);
}(angular, classmart));
