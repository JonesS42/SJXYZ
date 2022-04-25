//Contact button
var modal = document.getElementById("contactModal");

var btn = document.getElementById("contactBtn");

var span = document.getElementsByClassName("close") [0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//cat slides
if (document.getElementById("catCont") != null) {
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("catSlide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 0) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
 }
}

//experience description
function expCollapse () {
  var btn = document.getElementsByClassName("expCollapse");

  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (e) {

      this.classList.toggle("expanded");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
          content.style.overflow = "hidden";
      } else {
          content.style.display = "block";
      }

      if (this.classList.contains("expanded")) {
        content.querySelector(".descGradient").style.opacity  = "0";
        content.classList.add("expanded");
      } else {
        content.querySelector(".descGradient").style.opacity  = "1";
        content.classList.remove("expanded");
      }
  });
  }
}

//skills animation

function hovNull () {
  var sTable = document.getElementById("sTable");
  if (sTable != null) {
    var srHov =  document.getElementsByClassName("skillRow");

    for (var i = 0; i < srHov.length; i++) {
      srHov[i].addEventListener("mouseenter", hovEnter);
      srHov[i].addEventListener("mouseleave", hovLeave);
    }

    function hovEnter (e) {
      var startIndex = 5 - e.target.children.length;
      for (var i = startIndex; i < 5; i++) {
        e.target.querySelector(`.ethr${i}`).classList.add("bounce");
      }
    }
    
    function hovLeave (e) {
      var startIndex = 5 - e.target.children.length;
      for (var i = startIndex; i < 5; i++) {
        e.target.querySelector(".ethr" + i).classList.remove("bounce");
      }
    }
  }
}



window.onload = () => {
  console.log("loaded");
  hovNull();
  expCollapse();
}



