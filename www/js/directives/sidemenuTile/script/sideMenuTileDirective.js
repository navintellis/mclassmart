(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName).
  directive('sidemenuTile', function($state) {

      var linker=function(scope, element, attr) {
          scope.$state = $state;
        var tileName = attr.tileName;

        var screenConfig = classmart.enums.screenConfig[tileName];
        scope.tileData = {
          title: screenConfig.title,
          state: screenConfig.state,
          img: screenConfig.img
        };
      };

    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'js/directives/sidemenuTile/template/sidemenuTileTemplate.html',
      link: linker
    };

  });
}(angular, classmart));
