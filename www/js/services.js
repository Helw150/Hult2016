angular.module('app.services', [])

    .factory('focus', function($timeout, $window) {
	return function(id) {
	    // timeout makes sure that it is invoked after any other event has been triggered.
	    // e.g. click events that need to run before the focus or
	    // inputs elements that are in a disabled state but are enabled when those events
	    // are triggered.
	    $timeout(function() {
		var element = $window.document.getElementById(id);
		if(element)
		    element.focus();
	    })
	}
    })

    .service('LoginService', function($q) {
	return {
            loginUser: function(name, pw) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		
		if (name == 'user' && pw == 'secret') {
                    deferred.resolve('Welcome ' + name + '!');
		} else {
                    deferred.reject('Wrong credentials.');
		}
		promise.success = function(fn) {
                    promise.then(fn);
                    return promise;
            }
		promise.error = function(fn) {
                    promise.then(null, fn);
                return promise;
		}
		return promise;
            }
	}
    })
