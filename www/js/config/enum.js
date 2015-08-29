var classmart = classmart || {};

classmart.enums.apiConfig = {
    'GetUserDistributionList': {
        //currentPatientCheck : true,
        suffixUrl: 'Patient/GetUserDistributionList',
        type: 'POST',
        dataType: 'JSON',
        data: {},
        contentType: '',
        addAuthHeader: true
    },
    'WebRcmPathwayGet' :{
        suffixUrl: 'Patient/WebRcmPathwayGet',
        type: 'POST',
        dataType: 'JSON',
        data: {},
        contentType: '',
        addAuthHeader: true
    }
};

classmart.enums.routeConfig={
    'login':{
        state:'login',
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    },
    'app_home':{
        state:'app.home',
        url: '/home',
        templateUrl: 'templates/home.html',
    },
    'app_timetable':{
        state:'app.timetable',
        url: '/timetable',
        templateUrl: 'templates/timetable.html',
    },
    'app_rr':{
        state:'app.rr',
        url: '/rr',
        templateUrl: 'templates/recommendedReading.html',
    },
    'app_mentor':{
        state:'app.mentor',
        url: '/mentor',
        templateUrl: 'templates/mentor.html',
    },
    'app_quickref':{
        state:'app.quickref',
        url: '/quickref',
        templateUrl: 'templates/quickReference.html',
    },
    'app_account':{
        state:'app.account',
        url: '/account',
        templateUrl: 'templates/accountSetting.html',
    }


};


classmart.enums.screenConfig={
    'home': {
        title:'Home',
        state: classmart.enums.routeConfig.app_home.state,
        img: 'img/Home_Icon.png'
    },
    'timetable': {
        title:'Time Table',
        state: classmart.enums.routeConfig.app_timetable.state,
        img: 'img/Home_Icon.png'
    },
    'rr': {
        title:'Recom Reading',
        state: classmart.enums.routeConfig.app_rr.state,
        img: 'img/Home_Icon.png'
    },
    'mentor': {
        title:'Mentor',
        state: classmart.enums.routeConfig.app_mentor.state,
        img: 'img/Home_Icon.png'
    },
    'quickref': {
        title:'Quick Ref',
        state: classmart.enums.routeConfig.app_quickref.state,
        img: 'img/Home_Icon.png'
    },
    'account': {
        title:'Account',
        state: classmart.enums.routeConfig.app_account.state,
        img: 'img/Home_Icon.png'
    }
};
