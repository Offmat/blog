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
