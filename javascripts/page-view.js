define(function(require) {
  //dependencies for the create and login functions
  var create = require("create-user");
  var login = require("login");

//If the promise resolved, the user will be able to move onto the form.
//shows form after user creates new account
  $("body").on('click', "#create", function() {
    //promise from create-user.js
    create.userCreate()
    .then(function(){
      //section two components
      $("#form-container").removeClass("hidden");
      $(".user-login").hide();
      //section three components
      $("#browse-container").hide();
    })
    .fail(function(){
      alert("error, the specified email is invalid");      
      });
    });//end of function

//shows user's profile after user logs in
   $("body").on('click', "#log-in", function() {
      //If promise is true, it calls the function and moves onto next template.
      //if promie fails, it errors and it does not move on.
      //promise from login.js
      login.userLogin()
      .then(function(){
        //section two components
        $("#complete-form").removeClass("hidden");
        $(".user-login").hide();
        //section three components
        $("#browse-container").removeClass("hidden");
      })
      .fail(function(){
        alert("Please make an account");  
      });
    });//end of function


//shows user's profile after user creates new account and completes form
  $("body").on('click', "#submit", function() {
      //section two components
      $("#complete-form").removeClass("hidden");
      $("#form-container").hide();
      $(".user-login").hide();
      //section three components
      $("#browse-container").removeClass("hidden");
  });//end of function
 
});