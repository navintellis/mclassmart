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
            switch (link.clickConfig.type) {
              case 'url':
                link.notificationCount = -1;
                $state.go(link.clickConfig.data);
                break;
              case 'toggle':
                link.img = (link.img === link.clickConfig.data.checked) ? link.clickConfig.data.unchecked : link.clickConfig.data.checked;
                if (link.clickConfig.data.callback) {
                  link.clickConfig.data.callback();
                }
                break;
              default:
                console.log('notificationQuickLinkDirective: default Handling - ' + link.clickConfig.data);
                break;
            }
          };
        }
      };
    }
  ]);
}(angular, classmart));
