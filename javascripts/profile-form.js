define(function(require) {
  var Firebase = require('firebase');
  var userStorage = require('userStorage');

  
  function populateForm(formObjects) {

    require(['hbs!../templates/profile-form-template'], function (formTemplate) {
      $("#form-container").html(formTemplate(formObjects));
    });

  };

  populateForm();

  var myName;
  var myGender;
  var myAge;
  var myLocation;


  console.log("this file is running");

  // To create the user key in the `users` collection
  $("body").on("click", "#submit", function() {

    var nameRef = new Firebase('https://lovetohate.firebaseio.com/users/' + userStorage.getUser().uid);


    console.log("I WORK YAYAYAY");

    myName = $('#name').val();
    myGender = $('#gender').val();
    myAge = $('#age').val();
    myLocation = $('#location').val();


    //to get info from text input
    // console.log($('#name').val());
    //to get the radio button input
    var MyGroup1 = $('input[name=options1]:checked').val();
    var MyGroup2 = $('input[name=options2]:checked').val();
    var MyGroup3 = $('input[name=options3]:checked').val();
    var MyGroup4 = $('input[name=options4]:checked').val();
    var MyGroup5 = $('input[name=options5]:checked').val();
    var MyGroup6 = $('input[name=options6]:checked').val();
    var MyGroup7 = $('input[name=options7]:checked').val();
    var MyGroup8 = $('input[name=options8]:checked').val();
    var MyGroup9 = $('input[name=options9]:checked').val();
    var MyGroup10 = $('input[name=options10]:checked').val();
  
    nameRef.set({name: myName, gender: myGender, age: myAge, location: myLocation, group1: MyGroup1, group2: MyGroup2, group3: MyGroup3, group4: MyGroup4, group5: MyGroup5, group6: MyGroup6, group7: MyGroup7, group8: MyGroup8, group9: MyGroup9, group10: MyGroup10});
  });

});