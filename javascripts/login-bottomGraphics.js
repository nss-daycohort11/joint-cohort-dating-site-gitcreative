define(function(require) {

  function loginGraphics(formObjects) {

    require(['hbs!../templates/login-bottomGraphics-template'], function (formTemplate) {
      $("#bottom-graphics").html(formTemplate(formObjects));
    });

  };

  loginGraphics();

});