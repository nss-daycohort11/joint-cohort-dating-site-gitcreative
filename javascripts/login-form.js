define(function(require) {

  function loginForm(formObjects) {

    require(['hbs!../templates/login-template'], function (formTemplate) {
      $(".user-login").html(formTemplate(formObjects));
    });

  };

  loginForm();

});