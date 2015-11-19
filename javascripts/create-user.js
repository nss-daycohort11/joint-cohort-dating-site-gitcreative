define(function(require) {
  var Firebase = require("firebase");
  var loginForm = require("login-form");
  var userStorage = require("userStorage");
  var completeProfile = require('complete-profile');
  var Q = require("q");
  //make a variable to return a promise.
  var deferred = Q.defer();

  //get a reference to our Firebase app
  var ref = new Firebase("https://lovetohate.firebaseio.com");
  //have to return the function to the page view.
    return {
      //if email is not the correct format, promise will be rejected.
      //else the promise will be resolved.
      userCreate: function() {
        ref.createUser({
          email    : $('#email').val(),
          password : $('#password').val()
          }, function(error, userData) {
          if (error) {
            // alert(error);
            console.log("Error creating user:", error);
            //rejecting promise
            deferred.reject(error);
          } else {
            //setting the user in firebase?
            userStorage.setUser(userData);
            //resolving promise
            deferred.resolve(ref.createUser);
            console.log("Successfully created user account with uid:", userData.uid);
            console.log("Successfully created user account:", userData);
          }
        });
      //returning promise
      return deferred.promise;
    }
  }//end create new user


});//end require