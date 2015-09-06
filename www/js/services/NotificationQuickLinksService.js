(function(angular, classmart, _) {
  'use strict';
  angular.module(classmart.constants.moduleName)
    .factory('NotificationQuickLinksService', function() {
      var screenConfig = classmart.enums.screenConfig,
        notificationQuickLinks = {
          data: [{
            screenId: 'mentor',
            title: screenConfig.mentor.title,
            img: screenConfig.mentor.img,
            notificationCount: 3,
            clickConfig: {
              type: 'url',
              data: screenConfig.mentor.state
            }
          }, {
            screenId: 'timetable',
            title: screenConfig.timetable.title,
            img: screenConfig.timetable.img,
            notificationCount: 5,
            clickConfig: {
              type: 'url',
              data: screenConfig.timetable.state
            }
          }]
        },
        getNotificationCountByTitle = function(screenId) {
          var notificationData = _.find(notificationQuickLinks.data, {
            'screenId': screenId
          }),
            notificationCount = 0;
          if (typeof notificationData != 'undefined') {
            notificationCount = notificationData.notificationCount;
          }
          return notificationCount;
        },
        getNotificationQuickLinksData = function() {
          return notificationQuickLinks.data;
        };

      return {
        notificationsQuickLinks: notificationQuickLinks,
        getNotificationCountByTitle: getNotificationCountByTitle,
        getNotificationQuickLinksData: getNotificationQuickLinksData
      };
    });
}(angular, classmart, _));
