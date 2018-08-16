// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.closePopup', 'starter.controllers', 'starter.services', 'starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(false);

    }
    if (window.StatusBar) {
      if (ionic.Platform.isAndroid()) {
        StatusBar.backgroundColorByHexString("#ccc");
      } else {
        StatusBar.styleDefault();
      }
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $compileProvider) {

  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

  /* Platform related config */
  $ionicConfigProvider.scrolling.jsScrolling(true);
  $ionicConfigProvider.tabs.style('standard');
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');
  $ionicConfigProvider.navBar.positionPrimaryButtons('right');
  $ionicConfigProvider.views.swipeBackEnabled(true);
  $ionicConfigProvider.backButton.icon('ion-android-arrow-back');
  $ionicConfigProvider.backButton.text(false);
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.form.toggle('small');
  //$ionicConfigProvider.form.checkbox('');
  //$ionicConfigProvider.spinner.icon('spiral');


  $stateProvider

  .state('init', {
    url: '/init',
    abstract: true,
    templateUrl: 'templates/header.html',
    controller: 'LoginCtrl'
  })

  .state('init.begining', {
    cache: false,
    url: "/begining",
    views: {
      'loginContent': {
        templateUrl: "templates/begining.html",
        controller: 'LoginCtrl'
      }
    }
  })

  .state('init.signup', {
    cache: false,
    url: "/signup",
    views: {
      'loginContent': {
        templateUrl: "templates/signup.html",
        controller: 'LoginCtrl'
      }
    }
  })

  .state('init.login', {
    cache: false,
    url: "/login",
    views: {
      'loginContent': {
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl'
      }
    }
  })

  .state('intro', {
    cache: false,
    url: "/intro",
    templateUrl: "templates/intro.html",
    controller: 'LoginCtrl'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'MapCtrl'
      }
    }
  })

  .state('app.edit', {
    url: '/edit',
    views: {
      'menuContent': {
        templateUrl: 'templates/edit.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('app.notifications', {
    url: '/notifications',
    views: {
      'menuContent': {
        templateUrl: 'templates/notifications.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.faq', {
    url: '/faq',
    views: {
      'menuContent': {
        templateUrl: 'templates/faq.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.termos', {
    url: '/termos',
    views: {
      'menuContent': {
        templateUrl: 'templates/termos.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.infracao', {
    url: '/infracao?id=:infracaoId',
    views: {
      'menuContent': {
          templateUrl: 'templates/infracao.html',
          controller: 'PlaylistCtrl'
        }
      }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/init/begining');
});
