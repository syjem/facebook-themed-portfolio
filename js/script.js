
var mainNav = document.querySelector(".main-nav");
var links = mainNav.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Stop Scrolling

$(document).ready(function() {
  $("#aside-left").scroll(function() {
    if ($("#aside-left").scrollTop() + $("#aside-left").innerHeight() >= $("#aside-left")[0].scrollHeight) {
      $("#aside-left").addClass("stop-scroll");
    } else {
      $("#aside-left").removeClass("stop-scroll");
    }
  });
});
