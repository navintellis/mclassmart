(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName).directive('quickLinks', ['$state', '$compile',
    function($state, $compile) {
      return {
        templateUrl: 'js/directives/quickLinks/template/quickLinksTemplate.html',
        restrict: 'E',
        replace: true,
        scope: {
          links: '='/*,
            xyz: '&'*/
        },
        link: function postLink($scope, elem, attrs) {
          $scope.onQuickLinkTap = function(link) {
            link.notificationCount = 0;
            switch (link.clickConfig.type) {
              case 'url':
                $state.go(link.clickConfig.data);
                break;
              default:
                    console.log(link.clickConfig.data);
                break;
            }
          };
        }
      };
    }
  ]);
}(angular, classmart));
