define(function(require) {

  function populateForm(formObjects) {

    require(['hbs!../templates/profile-form-template'], function (formTemplate) {
      $("#form-container").html(formTemplate(formObjects));
    });

  };

  populateForm();

});