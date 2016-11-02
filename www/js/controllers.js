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
                title: "شكرا",
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
function ($scope, focus, $timeout, $stateParams, $ionicPopup, i, $cordovaMedia, $ionicLoading) {
    $scope.audio = ["http://arabicquick.com/content/uploads/2014/11/ab_a31.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a32.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a33.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a34.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a35.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a36.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a37.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a38.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a39.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a40.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a41.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a42.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a43.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a44.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a45.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a46.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a47.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a48.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a49.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a50.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a51.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a52.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a53.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a54.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a55.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a56.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a57.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a58.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a59.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a60.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a61.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a62.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a63.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a64.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a65.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a66.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a67.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a68.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a69.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a70.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a71.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a72.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a73.mp3",
		    "http://arabicquick.com/content/uploads/2014/11/ab_a74.mp3"]

    $scope.current = $scope.audio[parseInt(i)];
    $scope.failed = function (){
	focus('textInput')
        $scope.toClear = "";
        document.getElementById("textInput").value = "";
        i = parseInt(i) + 1;
        $scope.current = $scope.audio[parseInt(i)];
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
        $scope.current = $scope.audio[parseInt(i)];
        var myPopup = $ionicPopup.show(
            {
                title: "شكرا",
                subtitle: "كان هذا السؤال تخطي",
                scope: $scope,
            })
        $timeout(function()
		 {
                myPopup.close();
		 }, 500)
    }
    
    $scope.play = function(src) {
	
        media = $cordovaMedia.newMedia(src);
        media.play();
	$scope.$on("$stateChangeStart", function(){
            media.stop();
	});
    }    
})
 
