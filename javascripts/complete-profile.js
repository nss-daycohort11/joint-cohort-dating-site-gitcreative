define(function(require) {

	var Firebase = require('firebase');

	var ref = new Firebase("https://lovetohate.firebaseio.com/")

	var profileData;

	//profile Id comes from the login page that gives the ID.
  return {
  	showProfile: function(profileID) {
		console.log("profileID", profileID);
	  	ref.child(profileID).once("value", function (snapshot) {
			profileData = snapshot.val();
			console.log("snap", profileData);
	    	
	    	//passing the ID to Handlebars and populating the dom.
	    	require(['hbs!../templates/final-profile-template'], function (formTemplate) {
	      		$("#complete-form").html(formTemplate({data: profileData}));
	    	});

	  	});	
  	}
  }

});