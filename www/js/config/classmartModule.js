(function(angular, classmart, _){
    angular.module(classmart.constants.moduleName, ['Scope.safeApply', 'ionic', 'ionic-datepicker'])
    //attach external libraries to the rootScope;
    .run(function($rootScope){
    $rootScope._ = _;
    });
}(angular, classmart, _));

