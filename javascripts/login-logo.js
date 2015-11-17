define(function(require) {

  function loginForm(formObjects) {

    require(['hbs!../templates/login-logo-template'], function (formTemplate) {
      $(".logo-login").html(formTemplate(formObjects));
    });

  };

  loginForm();

});