angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('men.inicio', {
    url: '/index',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('men.misComunidades', {
    url: '/communities',
    views: {
      'side-menu21': {
        templateUrl: 'templates/misComunidades.html',
        controller: 'misComunidadesCtrl'
      }
    }
  })

  .state('men.anonimos', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/anonimos.html',
        controller: 'anonimosCtrl'
      }
    }
  })

  .state('men', {
    url: '/side-menu',
    templateUrl: 'templates/men.html',
    controller: 'menCtrl'
  })

  .state('men.ingresar', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingresar.html',
        controller: 'ingresarCtrl'
      }
    }
  })

  .state('men.registrarse', {
    url: '/register',
    views: {
      'side-menu21': {
        templateUrl: 'templates/registrarse.html',
        controller: 'registrarseCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu/index')



});
