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
// window.addEventListener( "load", function () {
//   document.getElementById('q').value = "insert search tags";
//
//   document.getElementById('q').addEventListener( "mouseover", function () {
//     if (this.value == "insert search tags") this.value = "";
//   });
//
//   document.getElementById('q').addEventListener( "mouseout", function () {
//     if (this.value == "") this.value = "insert search tags";
//   });
//
//   // document.getElementById('q').addEventListener( "keypress", function () {
//   //   console.log(this.value);
//   // });
//
// });
//
//
//
// window.addEventListener( "load", function () {
//
//   document.getElementById('add').addEventListener( "click", function () {
//     var a = parseInt(document.getElementById('field1').value);
//     var b = parseInt(document.getElementById('field2').value);
//     var result = a + b;
//     document.getElementById('wynik').innerHTML = result
//   });
//
// });

// window.addEventListener( "load", function () {
//   var newElement = document.createElement('h1');
//   document.body.appendChild(newElement);
//   var request = new XMLHttpRequest();
//   request.open("GET", "http://localhost:3000/exercise.txt");
//   request.responseType = 'json';
//   request.addEventListener("load", function () {
//     document.getElementById('q').value = this.response.var1;
//     newElement.innerText = this.response.var2;
//   });
//   request.send();
// })



window.addEventListener( "load", function () {
  var elements = document.querySelectorAll('.summary');
  for( var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function(e) {
      e.preventDefault();
      var request = new XMLHttpRequest();
      request.open("GET", this.href + '.json');
      request.responseType = 'json';
      request.addEventListener("load", function () {
        var summary = document.getElementById('summary-' + this.response.id);
        if (summary.innerText == "Summary") {
          summary.innerText = "Comments: " + this.response.comments +
            ", Likes: " + this.response.likes;
          summary.setAttribute('style', 'background: black; color: red')
        } else {
          summary.innerText = "Summary";
          summary.removeAttribute('style');
        }
      })
      request.send();
    })
  }
})
