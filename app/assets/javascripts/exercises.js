//Dodać w divie (wybacz, ale span mi tam bardziej pasował) licznik,
//który co 1 s będzie zliczał artykuły

window.addEventListener( "load", function() {
  setInterval(function () {
    var request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/articles.json");
    request.responseType = "json";
    request.addEventListener( "load", function() {
      document.getElementById("articles-summary").innerText = this.response.articles
    })
    request.send();
  }, 1000)
})
