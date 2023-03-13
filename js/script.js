
window.onload = function() {

  // Changed background Color on click

    const changeBtn = document.getElementById("fb_btn");
    const htmlBody = document.querySelector("body");
    const postBtn = document.getElementById("share");

    const randomFunction = function() {
    const colors = ["#EB455F", "#FF7B54", "#D3756B", "#FEA1BF", "#C92C6D", "#D61355", "#CB1C8D", "#18191a"];

    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    htmlBody.style.backgroundColor = randomColor;

   switch(randomColor) {
    case "#EB455F":
      postBtn.style.backgroundColor = "#EB455F";
      postBtn.style.border = "none";
      break;
    case "#FF7B54":
      postBtn.style.backgroundColor = "#FF7B54";
      postBtn.style.border = "none";
      break;
    case "#D3756B":
      postBtn.style.backgroundColor = "#D3756B";
      postBtn.style.border = "none";
      break;
    case "#FEA1BF":
      postBtn.style.backgroundColor = "#FEA1BF";
      postBtn.style.border = "none";
      break;
    case "#C92C6D":
      postBtn.style.backgroundColor = "#C92C6D";
      postBtn.style.border = "none";
      break;
    case "#D61355":
      postBtn.style.backgroundColor =  "#D61355";
      postBtn.style.border = "none";
      break;
    case "#CB1C8D":
      postBtn.style.backgroundColor =  "#CB1C8D";
      postBtn.style.border = "none";
      break;
    case "#18191a":
      postBtn.style.backgroundColor = "#23bbe1";
      break;
   }

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



