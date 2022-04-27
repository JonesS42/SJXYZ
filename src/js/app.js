import '../css/style.css';

function importAll(r) {
  r.keys().forEach(r)
}

importAll(require.context('../ImagesEtc/', true, /\.(jpg|svg|png|gif)$/))


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

//cat slide
let slides = document.getElementsByClassName("catSlide");
let dot = document.getElementsByClassName("dot");
let currentSlide = 0;

document.querySelector(".next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.querySelector(".prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    dot[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    dot[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

document.querySelectorAll('.dot').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})

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
