angular.module('app.controllers', [])

.controller('inicioCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('misComunidadesCtrl', ['$scope', '$stateParams', 'communities',
function ($scope, $stateParams, communities) {
  $scope.communities = communities;

}])

.controller('anNimosCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


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
