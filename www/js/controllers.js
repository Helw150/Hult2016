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
function ($scope, focus, $timeout, $stateParams, $ionicPopup, i) {
    $scope.images = ["img/sample/img001.png",
		     "img/sample/img002.png",
		     "img/sample/img003.png",
		     "img/sample/img004.png",
		     "img/sample/img005.png",
		     "img/sample/img006.png",
		     "img/sample/img007.png",
		     "img/sample/img008.png",
		     "img/sample/img009.png",
		     "img/sample/img010.png",
		     "img/sample/img011.png",
		     "img/sample/img012.png",
		     "img/sample/img013.png",
		     "img/sample/img014.png",
		     "img/sample/img015.png",
		     "img/sample/img016.png",
		     "img/sample/img017.png",
		     "img/sample/img018.png",
		     "img/sample/img019.png",
		     "img/sample/img020.png",
		     "img/sample/img021.png",
		     "img/sample/img022.png",
		     "img/sample/img023.png",
		     "img/sample/img024.png",
		     "img/sample/img025.png",
		     "img/sample/img026.png",
		     "img/sample/img027.png",
		     "img/sample/img028.png",
		     "img/sample/img029.png",
		     "img/sample/img030.png",
		     "img/sample/img031.png",
		     "img/sample/img032.png",
		     "img/sample/img033.png",
		     "img/sample/img034.png",
		     "img/sample/img035.png",
		     "img/sample/img036.png",
		     "img/sample/img037.png",
		     "img/sample/img038.png",
		     "img/sample/img039.png",
		     "img/sample/img040.png",
		     "img/sample/img041.png",
		     "img/sample/img042.png",
		     "img/sample/img043.png",
		     "img/sample/img044.png",
		     "img/sample/img045.png",
		     "img/sample/img046.png",
		     "img/sample/img047.png",
		     "img/sample/img048.png",
		     "img/sample/img049.png",
		     "img/sample/img050.png"]

    $scope.current = $scope.images[parseInt(i)];
    $scope.failed = function (){
	focus('textInput')
        $scope.toClear = "";
        document.getElementById("textInput").value = "";
        i = parseInt(i) + 1;
        $scope.current = $scope.images[parseInt(i)];
        var myPopup = $ionicPopup.show(
            {
                title: "اعتذارنا",
                subtitle: "كان هذا السؤال تخطي",
                scope: $scope,
            })
        $timeout(function()
		 {
                     myPopup.close();
		 }, 500)
    }
    
    $scope.solved = function (){
	focus('textInput')
        $scope.toClear = "";
        document.getElementById("textInput").value = "";
        i = parseInt(i) + 1;
            $scope.current = $scope.images[parseInt(i)];
        var myPopup = $ionicPopup.show(
            {
                title: "",
                subtitle: "كان هذا السؤال تخطي",
                scope: $scope,
            })
        $timeout(function()
		 {
                myPopup.close();
		 }, 500)
    }
    
    
})
 
.controller('menuCtrl',
function ($scope, $stateParams) {})

.controller('audioCtrl',
function ($scope, $stateParams, $cordovaMedia, $ionicLoading) {
    
    $scope.play = function(src) {
        var media = $cordovaMedia.newMedia(src);
        media.play();
	$scope.$on("$destroy", function(){
            media.stop();
    });
    }

})
 
