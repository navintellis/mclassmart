(function(classmart, angular) {
  'use strict';
  angular.module(classmart.constants.moduleName)
    .config(function($stateProvider, $urlRouterProvider) {

      var routeConfig = classmart.enums.routeConfig;

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');

      //default routings
      var homeUrlFullUrl = routeConfig.app.url + routeConfig.app_home.url,
        learnersKattaFullUrl = routeConfig.app.url + routeConfig.app_home.url + routeConfig.app_home_learnersKatta.url;
      $urlRouterProvider.when(homeUrlFullUrl, learnersKattaFullUrl);

      // routing configurations
      $stateProvider
        .state(routeConfig.app.state, {
          url: routeConfig.app.url,
          abstract: true,
          templateUrl: routeConfig.app.templateUrl,
          controller: routeConfig.app.controller
        })

      .state(routeConfig.login.state, {
        url: routeConfig.login.url,
        templateUrl: routeConfig.login.templateUrl,
        controller: routeConfig.login.controller
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })
        .state('app.playlists', {
          url: '/playlists',
          views: {
            'menuContent': {
              templateUrl: 'templates/playlists.html',
              controller: 'PlaylistsCtrl'
            }
          }
        })

      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      })

      .state(routeConfig.app_home.state, {
        url: routeConfig.app_home.url,
        //abstract: true,
        redirectTo: routeConfig.app_home_learnersKatta.state,
        views: {
          'menuContent': {
            templateUrl: routeConfig.app_home.templateUrl,
            controller: routeConfig.app_home.controller
          }
        }
      })

      .state(routeConfig.app_timetable.state, {
        url: routeConfig.app_timetable.url,
        views: {
          'menuContent': {
            templateUrl: routeConfig.app_timetable.templateUrl
          }
        }
      })

      .state(routeConfig.app_rr.state, {
        url: routeConfig.app_rr.url,
        views: {
          'menuContent': {
            templateUrl: routeConfig.app_rr.templateUrl
          }
        }
      })

      .state(routeConfig.app_mentor.state, {
        url: routeConfig.app_mentor.url,
        views: {
          'menuContent': {
            templateUrl: routeConfig.app_mentor.templateUrl
          }
        }
      })

      .state(routeConfig.app_faculty.state, {
        url: routeConfig.app_faculty.url,
        views: {
          'menuContent': {
            templateUrl: routeConfig.app_faculty.templateUrl
          }
        }
      })

      .state(routeConfig.app_quickref.state, {
        url: routeConfig.app_quickref.url,
        views: {
          'menuContent': {
            templateUrl: routeConfig.app_quickref.templateUrl
          }
        }
      })

      .state(routeConfig.app_account.state, {
        url: routeConfig.app_account.url,
        views: {
          'menuContent': {
            templateUrl: routeConfig.app_account.templateUrl
          }
        }
      })

      .state(routeConfig.app_home_learnersKatta.state, {
        url: routeConfig.app_home_learnersKatta.url,
        views: {
          'homecontent-tab': {
            templateUrl: routeConfig.app_home_learnersKatta.templateUrl
          }
        }
      })

      .state(routeConfig.app_home_forum.state, {
        url: routeConfig.app_home_forum.url,
        views: {
          'homecontent-tab': {
            templateUrl: routeConfig.app_home_forum.templateUrl
          }
        }
      })

      .state(routeConfig.app_home_quiz.state, {
        url: routeConfig.app_home_quiz.url,
        views: {
          'homecontent-tab': {
            templateUrl: routeConfig.app_home_quiz.templateUrl
          }
        }
      });
    })
    .run(['$rootScope', '$state', '$injector',
      function($rootScope, $state, $injector) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
          //Note: Please keep the below commented code, it would be helpful in routing issues
          //https://github.com/angular-ui/ui-router/issues/1235
          /*var redirect = toState.redirectTo;
          if (redirect) {
            if (angular.isString(redirect)) {
              event.preventDefault();
              $state.go(redirect, toParams);
            } else {
              var newState = $injector.invoke(redirect, null, {
                toState: toState,
                toParams: toParams
              });
              if (newState) {
                if (angular.isString(newState)) {
                  event.preventDefault();
                  $state.go(newState);
                } else if (newState.state) {
                  event.preventDefault();
                  $state.go(newState.state, newState.params);
                }
              }
            }
          }*/

          //https://github.com/angular-ui/ui-router/issues/2041
          //http://stackoverflow.com/questions/24960288/angular-js-ui-router-how-to-redirect-to-a-child-state-from-a-parent/30219547#30219547
          if (toState.redirectTo) {
            event.preventDefault();
            $state.go(toState.redirectTo, toParams);
          }
        });
      }
    ]);


}(classmart, angular));
