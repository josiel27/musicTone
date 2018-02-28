// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      init();
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })


function init() {

  let totalTom = 12;

  //adding button click event
  function addEvtClick(num) {
    document.getElementById('tom' + num).addEventListener("click", function () {
      setDisplayNoneDivs();
      document.getElementById('divtom' + num).style.display = "block";
      console.log('Tom' + num)
    })
  };

  for (var i = 1; i <= totalTom; i++) {
    addEvtClick(i);
  };

  //hides the divs with tones
  function setDisplayNoneDivs() {
    function setDisplay(num) {
      document.getElementById('divtom' + num).style.display = "none";
    }
    for (var i = 1; i <= totalTom; i++) {
      setDisplay(i);
    }
  }

}