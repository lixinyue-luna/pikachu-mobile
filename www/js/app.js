// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.today', {
    url: '/today',
    views: {
      'menuContent': {
        templateUrl: 'templates/today.html',
        controller: 'todayController'
      }
    }
  })

    .state('app.recipes', {
      url: '/recipes',
      views: {
        'menuContent': {
          templateUrl: 'templates/recipes.html'
        }
      }
    })

  .state('app.recipedetails', {
    url: '/recipes/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/recipedetails.html',
      }
    }
  })

  .state('app.wishlist', {
    url: '/wishlist',
    views: {
      'menuContent': {
        templateUrl: 'templates/wishlist.html'
      }
    }
  })

  .state('app.shoppinglist', {
    url: '/shoppinglist',
    views: {
      'menuContent': {
        templateUrl: 'templates/shoppinglist.html'
      }
    }
  })

  .state('app.mykitchen', {
    url: '/mykitchen',
    views: {
      'menuContent': {
        templateUrl: 'templates/mykitchen.html',
      }
    }
  })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/today');
});
