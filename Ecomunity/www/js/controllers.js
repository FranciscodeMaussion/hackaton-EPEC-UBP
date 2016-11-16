angular.module('app.controllers', [])

.controller('inicioCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('misComunidadesCtrl', ['$scope', '$stateParams', 'communities', 'community', '$rootScope', 'posts', '$ionicModal',
function ($scope, $stateParams, communities, community, $rootScope, posts, $ionicModal) {
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
    msg.author = "pepe";
    msg.type = "msg";
    all.$add(msg);
    $scope.a.msg = "";
  }

  $ionicModal.fromTemplateUrl('./templates/share.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modalProfile = modal;
    });
    $scope.openShare = function() {
      $scope.modalProfile.show();
    };
    $scope.closeShare = function() {
      $scope.modalProfile.hide();
    };

    $scope.viaje = {};
    $scope.viaje.desde = "";
    $scope.viaje.hasta = "";
    $scope.compartir = function(){
      var all = posts(current);
      var msg = {};
      msg.text = $scope.a.msg;
      msg.author = "pepe";
      msg.type = "ride";
      msg.desde = $scope.viaje.desde;
      msg.hasta = $scope.viaje.hasta;
      all.$add(msg);
      $scope.viaje.desde = "";
      $scope.viaje.hasta = "";
      $scope.closeShare();
    }
}])

.controller('anonimosCtrl', ['$scope', '$stateParams', 'communities', 'community', '$rootScope', 'anonimos',
function ($scope, $stateParams, communities, community, $rootScope, anonimos) {
  $scope.showPosts = false;
  $scope.communities = communities;
  $scope.a = {};
  $scope.a.msg = "";
  var current;

  $scope.show = function (id){
    current = id;
    $scope.showPosts = true;
    $scope.posts = anonimos(id);
  };
  $scope.showAll = function (){
    $scope.showPosts = false;
  };
  $scope.sendToCommunity = function(){
    var all = anonimos(current);
    var msg = {};
    msg.text = $scope.a.msg;
    msg.type = "msg";
    all.$add(msg);
    $scope.a.msg = "";
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
