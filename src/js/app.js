import '../css/style.css';

//Contact button
const modal = document.getElementById("contactModal");

const btn = document.getElementById("contactBtn");

const span = document.getElementsByClassName("closeFlex") [0];

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
if (document.getElementsByClassName("cats-container").length > 0) {
    let slides = document.querySelectorAll(".catSlide");
    let dot = document.querySelectorAll(".dot");
    let currentSlide = 0;

    document.querySelector(".next").addEventListener("click", () => {
        changeSlide(currentSlide + 1, "next");
    });
    document.querySelector(".prev").addEventListener("click", () => {
        changeSlide(currentSlide - 1, "prev");
    });

    function changeSlide(moveTo, direction) {
        if (moveTo >= slides.length) {
            moveTo = 0;
        }
        else if (moveTo < 0) {
            moveTo = slides.length - 1;
        }
    
        slides[currentSlide].classList.toggle("active");
        slides[moveTo].classList.toggle("active");
        dot[currentSlide].classList.toggle("active");
        dot[moveTo].classList.toggle("active");
    
        currentSlide = moveTo;
    }

    document.querySelectorAll('.dot').forEach((bullet, bulletIndex) => {
        bullet.addEventListener('click', () => {
            if (currentSlide !== bulletIndex) {
                changeSlide(bulletIndex);
            }
        });
    });
}
  


window.onload = () => {
  console.log("loaded");
  hovNull();
  expCollapse();
}
