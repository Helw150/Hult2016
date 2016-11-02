angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('menu.main');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

   
.controller('mainCtrl',
function ($scope, $stateParams) {})
   
.controller('profileCtrl',
function ($scope, $stateParams) {})
   
.controller('menuCtrl',
function ($scope, $stateParams) {})
 
