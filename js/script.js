// changing a background-color of navigation while scrolling

$(document).scroll(function () {
  var height = $(".navbar").height();

  if ($(this).scrollTop() > height) {
    $(".navbar").css("background-color", "#fff");
    $(".navbar").css("box-shadow", " 0px 0px 30px rgb(81 94 125 / 10%)");
    $("a").css("color", "black");
    $(".unique").css("background-color", "#2ed06e");
    $(".unique").css("color", "#fff");
    $(".first").css("display", "none");
    $(".second").css("display", "block");
    $(".navbar-toggle span").css("background-color", "black");
  } else {
    $(".navbar").css("background", "none");
    $("a").css("color", "#fff");
    $(".unique").css("background-color", "#fff");
    $(".unique").css("color", "#000");
    $(".second").css("display", "none");
    $(".first").css("display", "block");
    $(".navbar").css("box-shadow", "none");
    $(".navbar-toggle span").css("background-color", "white");
  }

});

// for accordian 

const ourItemDiv = document.getElementsByClassName("item");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");

for (let i = 0; i < ourItemDiv.length; i++) {
  closeIcon[i].style.display = "none";

  ourItemDiv[i].addEventListener("click", () => {
    const result = ourItemDiv[i].classList.toggle("active");

    if (result) {
      closeIcon[i].style.display = "block";
      openIcon[i].style.display = "none";
    } else {
      closeIcon[i].style.display = "none";
      openIcon[i].style.display = "block";
    }
  });
}

// for animation on scrolling

AOS.init({
  offset: 120, 
  delay: 5000,
  duration: 2000, 
});


