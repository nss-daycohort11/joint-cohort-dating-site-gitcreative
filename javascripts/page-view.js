define(function(require) {

   $("body").on('click', "#log-in", function() {
      $("#form-container").removeClass("hidden");
      // $("#browse-container").removeClass("hidden");
      $(".user-login").hide();

  });

   $("body").on('click', "#create", function() {
      $("#form-container").removeClass("hidden");
      // $("#browse-container").removeClass("hidden");
      $(".user-login").hide();

  });

  //  $("body").on('click', "#submit", function() {
  //     $("#complete-form").removeClass("hidden");
  //     $("#form-container").hide();
  //     // $("#browse-container").removeClass("hidden");
  //     $(".user-login").hide();

  // });
 
});