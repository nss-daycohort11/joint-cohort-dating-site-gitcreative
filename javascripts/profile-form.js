define(function(require) {
  var Firebase = require('firebase');
  
  function populateForm(formObjects) {

    require(['hbs!../templates/profile-form-template'], function (formTemplate) {
      $("#form-container").html(formTemplate(formObjects));
    });

  };

  populateForm();
  // console.log("require", require);
  var myAge;
  var ref = new Firebase("https://lovetohate.firebaseio.com");
  var myUserID = ref.getAuth();
  var nameRef = new Firebase('https://lovetohate.firebaseio.com/' + myUserID.uid);

  console.log("this file is running");

  $("body").on("click", "#submit", function() {
    console.log("I WORK YAYAYAY");
    myAge = $('#age').val();
    //to get info from text input
    console.log($('#name').val());
    //to get the radio button input
    console.log($('input[name=options1]:checked').val());
    nameRef.set({age: myAge});
  });

});