angular.module('app.controllers', [])

.controller('misComunidadesCtrl', ['$scope', '$stateParams', 'communities', 'community', '$rootScope', 'posts',
function ($scope, $stateParams, communities, community, $rootScope, posts) {
  $scope.showPosts = false;
  $scope.communities = communities;
  $scope.a = {};
  $scope.a.msg = "";
  var current;
  $scope.show = function (id){
    current = id;
    $scope.showPosts = true;
    $scope.posts = posts(id);
  };
  $scope.showAll = function (){
    $scope.showPosts = false;
  };
  $scope.sendToCommunity = function(){
    var all = posts(current);
    var msg = {};
    msg.text = $scope.a.msg;
    msg.author = $rootScope.firebaseUser.email;
    msg.type = "msg";
    all.$add(msg);
  }
}])

.controller('anonimosCtrl', ['$scope', '$stateParams', 'communities', 'community', '$rootScope', 'posts',
function ($scope, $stateParams, communities, community, $rootScope, posts) {
  $scope.showPosts = false;
  $scope.communities = communities;
  $scope.a = {};
  $scope.a.msg = "";
  $scope.show = function (id){
    $scope.showPosts = true;
    var comm = community(id)
    $scope.posts = comm.anonimos;
  };
  $scope.showAll = function (){
    $scope.showPosts = false;
  };
  $scope.sendToCommunity = function(){
    var all = posts(current);
    var msg = {};
    msg.text = $scope.a.msg;
    msg.type = "msg";
    all.$add(msg);
  }
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
      $state.go('men.inicio');
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

.controller('registrarseCtrl', ['$scope', '$stateParams', '$state', 'Auth', '$rootScope',
function ($scope, $stateParams, $state, Auth, $rootScope) {
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
      $state.go('men.inicio');
    }).catch(function(error) {
      $scope.error = error;
    });
  }
}])
