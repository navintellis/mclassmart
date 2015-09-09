(function(angular, classmart) {
    'use strict';
    angular.module(classmart.constants.moduleName).
    controller('ForumCtrl', ['$scope',
        function($scope) {
            $scope.routeConfig = classmart.enums.routeConfig;
        }
    ]);
}(angular, classmart));
