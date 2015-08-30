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
    'app':{
        state:'app',
        url: '/app',
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    },
    'login':{
        state:'login',
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    },
    'app_home':{
        state:'app.home',
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
    },
    'app_timetable':{
        state:'app.timetable',
        url: '/timetable',
        templateUrl: 'templates/timetable.html',
        controller: ''
    },
    'app_rr':{
        state:'app.rr',
        url: '/rr',
        templateUrl: 'templates/recommendedReading.html',
        controller: ''
    },
    'app_mentor':{
        state:'app.mentor',
        url: '/mentor',
        templateUrl: 'templates/mentor.html',
        controller: ''
    },
    'app_faculty':{
        state:'app.faculty',
        url: '/faculty',
        templateUrl: 'templates/faculty.html',
        controller: ''
    },
    'app_quickref':{
        state:'app.quickref',
        url: '/quickref',
        templateUrl: 'templates/quickReference.html',
        controller: ''
    },
    'app_account':{
        state:'app.account',
        url: '/account',
        templateUrl: 'templates/accountSetting.html',
        controller: ''
    },
    'app_home_learnersKatta':{
        state:'app.home.learnerskatta',
        url: '/learnerskatta',
        templateUrl: 'templates/learnersKatta.html',
        controller: ''
    },
    'app_home_forum':{
        state:'app.home.forum',
        url: '/forum',
        templateUrl: 'templates/forum.html',
        controller: ''
    },
    'app_home_quiz':{
        state:'app.home.quiz',
        url: '/quiz',
        templateUrl: 'templates/quiz.html',
        controller: ''
    }


};


classmart.enums.screenConfig={
    'home': {
        title:'Home',
        state: classmart.enums.routeConfig.app_home.state,
        img: 'img/sidemenu_icons/home.png'
    },
    'timetable': {
        title:'Time Table',
        state: classmart.enums.routeConfig.app_timetable.state,
        img: 'img/sidemenu_icons/timetable.png'
    },
    'rr': {
        title:'Recom Reading',
        state: classmart.enums.routeConfig.app_rr.state,
        img: 'img/sidemenu_icons/recommended_reading.png'
    },
    'mentor': {
        title:'Mentor Connect',
        state: classmart.enums.routeConfig.app_mentor.state,
        img: 'img/sidemenu_icons/mentor_connect.png'
    },
    'faculty': {
        title:'Faculty Contact',
        state: classmart.enums.routeConfig.app_faculty.state,
        img: 'img/sidemenu_icons/faculty_contact.png'
    },
    'quickref': {
        title:'Quick Ref',
        state: classmart.enums.routeConfig.app_quickref.state,
        img: 'img/sidemenu_icons/quick_reference.png'
    },
    'account': {
        title:'Account',
        state: classmart.enums.routeConfig.app_account.state,
        img: 'img/sidemenu_icons/account_settings.png'
    }
};
