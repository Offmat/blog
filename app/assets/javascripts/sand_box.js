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
window.addEventListener( "load", function () {

  document.getElementById('add').addEventListener( "click", function () {
    var a = parseInt(document.getElementById('field1').value);
    var b = parseInt(document.getElementById('field2').value);
    var result = a + b;
    document.getElementById('wynik').innerHTML = result
  });

});

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
