// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('intro', {
    url: '/',
    templateUrl: 'templates/intro.html',
    controller: 'IntroCtrl'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
     controller: 'AppCtrl'
    })

  .state('app.main', {
      url: '/main',
     views: {
       'menuContent': {
         templateUrl: 'templates/main.html',
         controller: 'MainCtrl'
        }
      }
    })

  .state('app.login', {
      url: '/login',
     views: {
       'menuContent': {
         templateUrl: 'templates/login.html',
         controller: 'LoginCtrl'
        }
      }
    })

  .state('app.movie', {
      url: '/movie',
     views: {
       'menuContent': {
         templateUrl: 'templates/movie.html',
         controller: 'MovieCtrl'
        }
      }
    })

  $urlRouterProvider.otherwise("/");

})

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate, $ionicLoading) {
 
  // Called to navigate to the main app
  $scope.startApp = function() {
      $ionicLoading.show({
      template: '<ion-spinner icon="spiral"></ion-spinner>',
      duration: 3000
    }).then(function(){
       $state.go('app.main');
    });
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})

.controller('MainCtrl', function($scope, $rootScope, $http, $location, $state) {
$http.get("http://api.themoviedb.org/3/movie/now_playing?api_key=e649c1ec4f43c9f8ea307ec5aec0e891").then(function (response) {
$rootScope.myData = response.data.results;
})
$scope.cinema=function(id)
{
  $rootScope.id=id;
  $ionicLoading.show({
      template: '<ion-spinner icon="spiral"></ion-spinner>',
      duration: 3000
    })
}
})

.controller('AppCtrl', function() {
})
.controller('LoginCtrl', function() {
})
.controller('MovieCtrl', function() {
})
