define(function(require) {


  function profileImageToggle(formObjects) {

    require(['hbs!../templates/profile-img-template'], function (formTemplate) {
      $(".profile-img").html(formTemplate(formObjects));
    });

  };

  profileImageToggle();

  $("body").on("click", ".submit-btn", function() {
      console.log("clicked");
      $(".profile-img").removeClass("hidden");
      $(".logo-login").hide();
  });

});