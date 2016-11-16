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

.controller('menCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('ingresarCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('registrarseCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
