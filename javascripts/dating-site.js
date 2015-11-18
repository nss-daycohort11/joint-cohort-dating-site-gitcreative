 require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'q': '../lib/bower_components/q/q',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../lib/bower_components/firebase/firebase'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase' : {
      exports: "Firebase"
    }
  }
});

requirejs(
  ["dependencies", 
  "login-form", 
  "login-logo",
  "login-bottomGraphics",  
  "login", 
  "profile-form", 
  "form-button-info", 
  "browse", 
  "page-view"], 
  function(dependencies, 
    loginForm, 
    loginLogo, 
    loginGraphics,  
    login, 
    profileForm, 
    formButtons, 
    browseControl, 
    pageView) {

    /*
      You can choose to use the REST methods to interact with
      Firebase, or you can use the Firebase API with event
      listeners. It's completely up to each team.

      If you choose the former, I created two boilerplate modules
      named `potential-mates.js`, and `add-favorite.js`.
     */
    
  }
);
