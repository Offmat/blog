window.addEventListener( "load", function() {
  var button = document.getElementById("comments_btn")
  var comments = document.getElementById("comments")
  button.addEventListener( "click", function() {
    if (button.innerText == "Show comments") {
      button.innerText = "Hide comments"
      comments.setAttribute("style", "display: block")
    } else {
      button.innerText = "Show comments"
      comments.setAttribute("style", "display: none")
    }
  })
})
