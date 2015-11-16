define(function(require) {

  function populateBrowse(formObjects) {

    require(['hbs!../templates/browse-template'], function (formTemplate) {
      $("#browse-container").html(formTemplate(formObjects));
    });

  };

  populateBrowse();

});