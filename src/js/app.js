import './../css/style.css';

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
if (document.getElementsByClassName("cats-container") != null) {
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
}



window.onload = () => {
  console.log("loaded");
  hovNull();
  expCollapse();
}
