define(function(require) {
  var $ = require("jquery");
  var b = require("bootstrap");
  var h = require("hbs");
  var fb = require("firebase");
  //get a reference to our Firebase app
  var ref = new Firebase("https://lovetohate.firebaseio.com");
  //create new user/account when create account button is clicked
  $( "#create" ).click(function() {
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
  $( "#log-in" ).click(function() {
    ref.authWithPassword({
      email    : $('#email').val(),
      password : $('#password').val()
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  });//end login

});//end require