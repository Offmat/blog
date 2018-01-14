// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require_tree .
//= require jquery
//= require bootstrap-sprockets

// alert( 'Rails!!')
window.addEventListener( "load", function () {
  document.getElementById('q').value = "insert search tags";

  document.getElementById('q').addEventListener( "mouseover", function () {
    console.log("Mouse if on the search tab");
  });

  document.getElementById('q').addEventListener( "click", function () {
    document.getElementById('q').value = "clicked";
  });

  // document.getElementById('q').addEventListener( "keypress", function () {
  //   console.log(this.value);
  // });

});



window.addEventListener( "load", function () {

  document.getElementById('add').addEventListener( "click", function () {
    var a = parseInt(document.getElementById('field1').value);
    var b = parseInt(document.getElementById('field2').value);
    var result = a + b;
    document.getElementById('wynik').innerHTML = result
  });

});
