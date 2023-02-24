
window.onload = function() {

  // Changed background Color on click

    const changeBtn = document.getElementById("fb_btn");
    const htmlBody = document.querySelector("body");

    const randomFunction = function() {
    const colors = ["#EB455F", "#FF7B54", "#D3756B", "#FEA1BF", "#C92C6D", "#D61355", "#CB1C8D"];

    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    htmlBody.style.backgroundColor = randomColor;

  }

  changeBtn.onclick = randomFunction;



  
  // Change the search icon when clicked
    const searchInput = document.getElementById("search");
    const searchIcon = document.getElementById("icon_search");

    searchInput.addEventListener('focus', function() {
    searchIcon.classList.remove("fa-magnifying-glass");
    searchIcon.classList.add("fa-arrow-left");
  });

    searchInput.addEventListener("blur", function() {
  // Add the search icon and remove the arrow left icon
    searchIcon.classList.add("fa-magnifying-glass");
    searchIcon.classList.remove("fa-arrow-left");
  });


}



