var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 4300); // Change image every 2 seconds
}

// function toggleMenu() {
//   var menuDiv = document.getElementById("myTopnav");
//   var menuBtn = document.getElementById("menuBtn");
//   if (menuDiv.className === "topnav") {
//     menuDiv.className += " responsive";
//     menuBtn.innerHTML = '<i class="fa fa-times"></i>';
//   } else {
//     menuDiv.className = "topnav";
//     menuBtn.innerHTML = '<i class="fa fa-bars"></i>';

//   }
// }

