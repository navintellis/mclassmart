(function(classmart,angular) {
  'use strict';
  angular.module(classmart.constants.moduleName)
    .config(function($stateProvider, $urlRouterProvider) {

      var routeConfig =classmart.enums.routeConfig;

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');
      $stateProvider
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
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
        views: {
          'menuContent': {
            templateUrl: routeConfig.app_home.templateUrl
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
      });
    });


}(classmart,angular));
