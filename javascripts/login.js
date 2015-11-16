define(function(require) {
  var $ = require("jquery");
  var b = require("bootstrap");
  var h = require("hbs");

  var ref = new Firebase("https://lovetohate.firebaseio.com");

  ref.createUser({
    email    : $('#email'),
    password : $('#password')
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    } else {
      console.log("Successfully created user account with uid:", userData.uid);
      console.log("Successfully created user account with uid:", userData);
    }
  });



});