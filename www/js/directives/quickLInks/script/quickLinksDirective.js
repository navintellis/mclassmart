(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName).directive('quickLinks', ['$state',
    function($state) {
      return {
        templateUrl: 'js/directives/quickLinks/template/quickLinksTemplate.html',
        restrict: 'E',
        replace: true,
        scope: {
          links: '='
        },
        link: function postLink($scope, elem, attrs) {
          $scope.onQuickLinkTap = function(link) {
            link.notificationCount = 0;
            switch (link.clickConfig.type) {
              case 'url':
                $state.go(link.clickConfig.data);
                break;
              default:
                    console.log('notificationQuickLinkDirective: default Handling - '+link.clickConfig.data);
                break;
            }
          };
        }
      };
    }
  ]);
}(angular, classmart));
