angular.module('app.controllers', [])

.controller('inicioCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('misComunidadesCtrl', ['$scope', '$stateParams', 'communities',
function ($scope, $stateParams, communities) {
  $scope.communities = communities;

}])

.controller('anonimosCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('menCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('ingresarCtrl', ['$scope', '$stateParams', '$state', 'Auth',
function ($scope, $stateParams, $state, Auth) {
  $scope.login = function(){
    Auth.$signInWithEmailAndPassword($scope.user.mail, $scope.user.pass).then(function(firebaseUser) {
      console.log("Signed in as:", JSON.stringify(firebaseUser.uid));
      // todo correcto
      $scope.user = {
        'mail':'',
        'pass':''
      };
      Auth.$onAuthStateChanged(function(firebaseUser) {
        $scope.firebaseUser = firebaseUser;
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

.controller('registrarseCtrl', ['$scope', '$stateParams', 'Auth',
function ($scope, $stateParams, Auth) {
  $scope.register = function(){
    Auth.$createUserWithEmailAndPassword($scope.user.mail, $scope.user.pass)
    .then(function(firebaseUser) {
      $scope.message = "User created with uid: " + firebaseUser.uid;
      $scope.user = {
        'mail':'',
        'pass':''
      };
    }).catch(function(error) {
      $scope.error = error;
    });
  }
}])
