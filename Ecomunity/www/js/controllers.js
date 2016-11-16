angular.module('app.controllers', [])

.controller('inicioCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('misComunidadesCtrl', ['$scope', '$stateParams', 'communities', 'community',
function ($scope, $stateParams, communities, community) {
  $scope.showPosts = false;
  $scope.communities = communities;
  $scope.show = function (id){
    $scope.showPosts = true;
    var comm = community(id)
    $scope.posts = comm.posts;
  };
  $scope.showAll = function (){
    $scope.showPosts = false;
  };
}])

.controller('anonimosCtrl', ['$scope', '$stateParams', 'communities', 'community',
function ($scope, $stateParams, communities, community)  {
  $scope.showPosts = false;
  $scope.communities = communities;
  $scope.show = function (id){
    $scope.showPosts = true;
    var comm = community(id)
    $scope.posts = comm.anonimos;
  };
  $scope.showAll = function (){
    $scope.showPosts = false;
  };
}])

.controller('menCtrl', ['$scope', '$stateParams', 'Auth', '$rootScope',
function ($scope, $stateParams, Auth, $rootScope) {

}])

.controller('ingresarCtrl', ['$scope', '$stateParams', '$state', 'Auth', '$rootScope',
function ($scope, $stateParams, $state, Auth, $rootScope) {
  $scope.user = {
    'mail':'',
    'pass':''
  };
  $scope.login = function(){
    Auth.$signInWithEmailAndPassword($scope.user.mail, $scope.user.pass).then(function(firebaseUser) {
      console.log("Signed in as:", JSON.stringify(firebaseUser.uid));
      // todo correcto
      $scope.user = {
        'mail':'',
        'pass':''
      };
      Auth.$onAuthStateChanged(function(firebaseUser) {
        $rootScope.firebaseUser = firebaseUser;
      });
    }).catch(function(error) {
      console.log(error);
      if (error.code == 'auth/user-not-found'){
        // user incorrecto
      }
      if (error.code == 'auth/wrong-password'){
        // contraseña incorrecta
      }
    });
  }
  $scope.goToRegister = function(){
    $state.go('men.registrarse');
  }
}])

.controller('registrarseCtrl', ['$scope', '$stateParams', 'Auth', '$rootScope',
function ($scope, $stateParams, Auth, $rootScope) {
  $scope.user = {
    'mail':'',
    'pass':''
  };
  $scope.register = function(){
    Auth.$createUserWithEmailAndPassword($scope.user.mail, $scope.user.pass)
    .then(function(firebaseUser) {
      $scope.message = "User created with uid: " + firebaseUser.uid;
      $scope.user = {
        'mail':'',
        'pass':''
      };
      Auth.$onAuthStateChanged(function(firebaseUser) {
        $rootScope.firebaseUser = firebaseUser;
      });
    }).catch(function(error) {
      $scope.error = error;
    });
  }
}])
