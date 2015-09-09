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
        templateUrl: 'templates/learnersKatta/learnersKatta.html',
        controller: 'LearnersKattaCtrl'
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
    },
    'app_kattasubject':{
        state:'app.kattasubject',
        url: '/kattasubject/:id',
        templateUrl: 'templates/learnersKatta/kattasubject.html',
        controller: 'LearnersKattaCtrl'
    },
    'app_kattachapter':{
        state:'app.kattachapter',
        url: '/kattachapter/:id',
        templateUrl: 'templates/learnersKatta/kattachapter.html',
        controller: 'LearnersKattaCtrl'
    },
    'app_kattatopic':{
        state:'app.kattatopic',
        url: '/kattatopic/:id',
        templateUrl: 'templates/learnersKatta/kattatopic.html',
        controller: 'LearnersKattaCtrl'
    },
    'app_forumpost':{
        state:'app.forumpost',
        url: '/forumpost/:id',
        templateUrl: 'templates/learnersKatta/forumpost.html',
        controller: ''
    }


};


classmart.enums.screenConfig={
    'home': {
        screenId: 'home',
        title:'Home',
        state: classmart.enums.routeConfig.app_home.state,
        img: 'img/sidemenu_icons/home.png'
    },
    'timetable': {
        screenId: 'timetable',
        title:'Time Table',
        state: classmart.enums.routeConfig.app_timetable.state,
        img: 'img/sidemenu_icons/timetable.png'
    },
    'rr': {
        screenId: 'rr',
        title:'Recom Reading',
        state: classmart.enums.routeConfig.app_rr.state,
        img: 'img/sidemenu_icons/recommended_reading.png'
    },
    'mentor': {
        screenId: 'mentor',
        title:'Mentor Connect',
        state: classmart.enums.routeConfig.app_mentor.state,
        img: 'img/sidemenu_icons/mentor_connect.png'
    },
    'faculty': {
        screenId: 'faculty',
        title:'Faculty Contact',
        state: classmart.enums.routeConfig.app_faculty.state,
        img: 'img/sidemenu_icons/faculty_contact.png'
    },
    'quickref': {
        screenId: 'quickref',
        title:'Quick Ref',
        state: classmart.enums.routeConfig.app_quickref.state,
        img: 'img/sidemenu_icons/quick_reference.png'
    },
    'account': {
        screenId: 'account',
        title:'Account',
        state: classmart.enums.routeConfig.app_account.state,
        img: 'img/sidemenu_icons/account_settings.png'
    }
};

classmart.enums.activityState = {
    'enabled_negBased': 0,
    'disabled_negBased':-1
};
