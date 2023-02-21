
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
    const colors = ["#FFB84C", "#F16767", "#A459D1", "#EB455F", "#B4E4FF", "#F0A04B", "#EA8FEA"];

    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    htmlBody.style.backgroundColor = randomColor;

  }

  changeBtn.onclick = randomFunction;

}


