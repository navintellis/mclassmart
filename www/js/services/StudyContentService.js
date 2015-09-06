(function(angular, _, classmart, testData) {
  'use strict';
  angular.module(classmart.constants.moduleName)
    .factory('StudyContentService', ['$timeout',
      function($timeout) {

        var data = {
          studyContent: {
            subjects: [],
            chapters: [],
            topics: []
          }
        },
          enums = {
            subjects: 'subjects',
            chapters: 'chapters',
            topics: 'topics'
          },
          serviceFlags = {
            isInitialized: false
          },
          getStudyContent = function() {
            return data.studyContent;
          },
          getSubjectList = function() {
            return data.studyContent.subjects;
          },
          getStudyContentServiceCall = function(serviceSuccessCallback) {
            $timeout(function() {
              data.studyContent.subjects = testData.studyContent.subjects;
              data.studyContent.chapters = testData.studyContent.chapters;
              data.studyContent.topics = testData.studyContent.topics;
              serviceFlags.isInitialized = true;
              serviceSuccessCallback();
            }, 350);
          },
          initStudyContentServiceCall = function(serviceSuccessCallback) {
            if (!serviceFlags.isInitialized) {
              getStudyContentServiceCall(serviceSuccessCallback);
            } else {
              serviceSuccessCallback();
            }
          },
          getSelectedItemDataById = function(contentType, id) {
            id = parseInt(id);
            var contentElement = _.find(data.studyContent[contentType], {
              'id': id
            });
            return contentElement;
          },
          getDataById = function(contentType, parentId) {
            parentId = parseInt(parentId);
            var dataList = _.filter(data.studyContent[contentType], {
              'parentId': parentId
            });
            return dataList;
          };


        return {
          studyContentData: data,
          enums: enums,
          getStudyContent: getStudyContent,
          getSubjectList: getSubjectList,
          getStudyContentServiceCall: getStudyContentServiceCall,
          initStudyContentServiceCall: initStudyContentServiceCall,
          getSelectedItemDataById: getSelectedItemDataById,
          getDataById: getDataById
        };
      }
    ]);
}(angular, _, classmart, testData));
