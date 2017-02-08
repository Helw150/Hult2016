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
function ($scope, focus, $timeout, $stateParams, $ionicPopup, i, $cordovaSQLite) {
    
    $scope.images = ["001",
		     "002",
		     "003",
		     "004",
		     "005",
		     "006",
		     "007",
		     "008",
		     "009",
		     "010",
		     "011",
		     "012",
		     "013",
		     "014",
		     "015",
		     "016",
		     "017",
		     "018",
		     "019",
		     "020",
		     "021",
		     "022",
		     "023",
		     "024",
		     "025",
		     "026",
		     "027",
		     "028",
		     "029",
		     "030",
		     "031",
		     "032",
		     "033",
		     "034",
		     "035",
		     "036",
		     "037",
		     "038",
		     "039",
		     "040",
		     "041",
		     "042",
		     "043",
		     "044",
		     "045",
		     "046",
		     "047",
		     "048",
		     "049",
		     "050"]

    $scope.current = $scope.images[parseInt(i)];    
    
    $scope.failed = function (){
	focus('textInput')
        $scope.toClear = "";
        var query = "INSERT INTO snippets (timestamp, snippet_no, entry) VALUES (datetime('now'),?,?)";
    	$cordovaSQLite.execute(db, query, [parseInt(i), null]).then(function(res) {
            console.log("INSERT ID -> " + res.insertId);
        }, function (err) {
            console.error(err);
        });
        
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
        var query = "INSERT INTO snippets (timestamp, snippet_no, entry) VALUES (datetime('now'),?,?)";
        var entry = document.getElementById("textInput").value
    	$cordovaSQLite.execute(db, query, [parseInt(i), entry]).then(function(res) {
        	console.log("INSERT ID -> " + res.insertId);
        	}, function (err) {
            console.error(err);
        	});
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
/*
.controller("ExampleController", function($scope, $cordovaSQLite) {
 
    $scope.insert = function(firstname, lastname) {
        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
        $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
            console.log("INSERT ID -> " + res.insertId);
        }, function (err) {
            console.error(err);
        });
    }
 
    $scope.select = function(lastname) {
        var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
        $cordovaSQLite.execute(db, query, [lastname]).then(function(res) {
            if(res.rows.length > 0) {
                console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        });
    }
 
});
*/

/*
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
*/
 
