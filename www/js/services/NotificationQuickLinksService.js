(function(angular, classmart, _) {
  'use strict';
  angular.module(classmart.constants.moduleName)
    .factory('NotificationQuickLinksService', function() {
      var screenConfig = classmart.enums.screenConfig,
        data = {
          notificationQuickLinks: [{
            screenId: screenConfig.mentor.screenId,
            title: screenConfig.mentor.title,
            img: screenConfig.mentor.img,
            notificationCount: 3,
            clickConfig: {
              type: 'url',
              data: screenConfig.mentor.state
            }
          }, {
            screenId: screenConfig.timetable.screenId,
            title: screenConfig.timetable.title,
            img: screenConfig.timetable.img,
            notificationCount: 5,
            clickConfig: {
              type: 'url',
              data: screenConfig.timetable.state
            }
          }, {
            screenId: screenConfig.quickref.screenId,
            title: screenConfig.quickref.title,
            img: 'img/sidemenu_icons/quick_reference_white.png',
            notificationCount: classmart.enums.activityState.disabled_negBased,
            clickConfig: {
              type: 'toggle',
              data: {
                checked: 'img/sidemenu_icons/quick_reference_golden.png',
                unchecked: 'img/sidemenu_icons/quick_reference_white.png',
                callback: null
              }
            }
          }]
        },
        getNotificationCountByScreenId = function(screenId) {
          var notificationData = _.find(data.notificationQuickLinks, {
            'screenId': screenId
          }),
            notificationCount = 0;
          if (typeof notificationData != 'undefined') {
            notificationCount = notificationData.notificationCount;
          }
          return notificationCount;
        },
        getNotificationDataByScreenId = function(screenId) {
          var notificationData = _.find(data.notificationQuickLinks, {
            'screenId': screenId
          });
          return notificationData;
        },
        getNotificationQuickLinksData = function() {
          return data.notificationQuickLinks;
        };

      return {
        data: data,
        getNotificationCountByScreenId: getNotificationCountByScreenId,
        getNotificationDataByScreenId: getNotificationDataByScreenId,
        getNotificationQuickLinksData: getNotificationQuickLinksData
      };
    });
}(angular, classmart, _));
