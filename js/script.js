
window.onload = function() {

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


  // Changed background Color on click

    const changeBtn = document.getElementById("fb_btn");
    const htmlBody = document.querySelector("body");

    const randomFunction = function() {
    const colors = ["#2B3467", "#4D455D", "#635985", "#443C68", "#393053", "#332C39", "#393E46"];

    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    htmlBody.style.backgroundColor = randomColor;

  }

  changeBtn.onclick = randomFunction;

}


