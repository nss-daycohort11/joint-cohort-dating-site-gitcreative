define(function(require) {
  var Firebase = require("firebase");
  var loginForm = require("login-form");
  var userStorage = require("userStorage");
  var completeProfile = require('complete-profile');
  var Q = require("q");
  var deferred = Q.defer();

  //get a reference to our Firebase app
  var ref = new Firebase("https://lovetohate.firebaseio.com");

  //returning function to the page-view.js for the login only
  return {
    //if email does not exist on firebase, promise will be rejected.
    //else promise will be resolved.
    userLogin: function() {
      ref.authWithPassword({
        email    : $('#email').val(),
        password : $('#password').val()
        }, function(error, authData) {
        if (error) {
          deferred.reject(error);
          console.log("Login Failed!", error);
        } else {
          deferred.resolve(ref.authWithPassword);
          console.log("Authenticated successfully with payload:", authData);
          console.log("Authenticated successfully with payload:", authData.uid);

        //need to pass ID info to new function to populate the Dom.
        completeProfile.showProfile(authData.uid);
        }
      });
      return deferred.promise;
    }
  }//end login

});//end require