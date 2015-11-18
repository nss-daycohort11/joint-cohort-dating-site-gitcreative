define(function(require) {

//shows user's profile after user logs in
   $("body").on('click', "#log-in", function() {
      //section two components
      $("#complete-form").removeClass("hidden");
      $(".user-login").hide();
      //section three components
      $("#browse-container").removeClass("hidden");
  });

//shows form after user creates new account
  $("body").on('click', "#create", function() {
    //section two components
    $("#form-container").removeClass("hidden");
    $(".user-login").hide();
    //section three components
    $("#browse-container").hide();
  });

//shows user's profile after user creates new account and completes form
  $("body").on('click', "#submit", function() {
      //section two components
      $("#complete-form").removeClass("hidden");
      $("#form-container").hide();
      $(".user-login").hide();
      //section three components
      $("#browse-container").removeClass("hidden");
  });
 
});