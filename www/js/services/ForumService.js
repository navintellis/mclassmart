(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName)
    .factory('ForumService', ['$timeout',
//Note: Code is incomplete... Work in Progress
      function($timeout) {
        var data = {
          studyContent: {
            subjects: [],
            chapters: [],
            topics: []
          }
        },
          serviceFlags = {
            isInitialized: false
          },
          getDataServiceCall = function(serviceSuccessCallback) {
            $timeout(function() {
              data.studyContent.subjects = testData.studyContent.subjects;
              data.studyContent.chapters = testData.studyContent.chapters;
              data.studyContent.topics = testData.studyContent.topics;
              serviceFlags.isInitialized = true;
              serviceSuccessCallback();
            }, 350);
          },
          initDataServiceCall = function(serviceSuccessCallback) {
            if (!serviceFlags.isInitialized) {
              getDataServiceCall(serviceSuccessCallback);
            } else {
              serviceSuccessCallback();
            }
          };

        return {
          serviceData: data,
          getDataServiceCall: getDataServiceCall,
          initDataServiceCall: initDataServiceCall
        };
      }
    ]);
}(angular, classmart));
