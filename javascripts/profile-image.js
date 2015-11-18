define(function(require) {

  function populateForm(formObjects) {

    require(['hbs!../templates/profile-img-template'], function (formTemplate) {
      $("#form-container").html(formTemplate(formObjects));
    });

  };

  populateForm();

});