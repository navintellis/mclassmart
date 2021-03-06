(function(angular, classmart) {
  'use strict';
  angular.module(classmart.constants.moduleName).
  controller('TimetableCtrl', ['$scope',
    function($scope) {

      var disabledDates = [
        new Date(1437719836326),
        new Date(2015, 7, 10), //months are 0-based, this is August, 10th!
        new Date('Wednesday, August 12, 2015'), //Works with any valid Date formats like long format
        new Date("08-14-2015"), //Short format
        new Date(1439676000000) //UNIX format
      ];
      var monthList = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
      $scope.datepickerObject = {};
      $scope.datepickerObject.inputDate = new Date();


      var datePickerCallback = function(val) {
        if (typeof(val) === 'undefined') {
          console.log('No date selected');
        } else {
          console.log('Selected date is : ', val);
        }
      };

      $scope.datepickerObject = {
        titleLabel: 'Time Table', //Optional
        todayLabel: 'Today', //Optional
        closeLabel: 'Close', //Optional
        setLabel: 'Set', //Optional
        setButtonType: 'button-assertive', //Optional
        todayButtonType: 'button-assertive', //Optional
        closeButtonType: 'button-assertive', //Optional
        inputDate: new Date(), //Optional
        mondayFirst: true, //Optional
        //disabledDates: disabledDates, //Optional
        //weekDaysList: weekDaysList, //Optional
        monthList: monthList, //Optional
        templateType: 'popup', //Optional value=modal
        modalHeaderColor: 'bar-positive', //Optional
        modalFooterColor: 'bar-positive', //Optional
        from: new Date(2012, 8, 2), //Optional
        to: new Date(2018, 8, 25), //Optional
        callback: function(val) { //Mandatory
          datePickerCallback(val);
        }
      };
    }
  ]);
}(angular, classmart));
