define(function(require) {

   $("body").on('click', "#log-in", function() {
      console.log("clicked");
      $("#form-container").removeClass("hidden");
      // $("#browse-container").removeClass("hidden");
      $(".user-login").hide();
  });

   

});