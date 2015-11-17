define(function(require) {
  var Firebase = require("firebase");
  var loginForm = require("login-form");
  //get a reference to our Firebase app
  var ref = new Firebase("https://lovetohate.firebaseio.com");
  //create new user/account when create account button is clicked
  $("body").on("click", "#create", function(event) {
    ref.createUser({
      email    : $('#email').val(),
      password : $('#password').val()
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
        console.log("Successfully created user account:", userData);
      }
    });
  });//end create new user
  //log in user that is already set up
  $("body").on("click", "#log-in", function() {
    ref.authWithPassword({
      email    : $('#email').val(),
      password : $('#password').val()
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        console.log("Authenticated successfully with payload:", authData.uid);
      }
    });
  });//end login

});//end require