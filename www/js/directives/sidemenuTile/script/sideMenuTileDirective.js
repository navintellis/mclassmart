(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName).
  directive('sidemenuTile', function($state, $compile) {

    var linker = function(scope, element, attr) {
      scope.$state = $state;
      var tileName = attr.tileName;

      var screenConfig = classmart.enums.screenConfig[tileName];
      scope.tileData = {
        title: screenConfig.title,
        state: screenConfig.state,
        img: screenConfig.img
      };
      //Updating ion-item routing url from the child directive
      var hrefValue = $state.href(scope.tileData.state);
      element.parent().parent().attr('ng-href', hrefValue);
      element.parent().attr('ng-href', hrefValue);
      $compile(element.parent().parent().contents())(scope);
    };

    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'js/directives/sidemenuTile/template/sidemenuTileTemplate.html',
      link: linker
    };

  });
}(angular, classmart));
