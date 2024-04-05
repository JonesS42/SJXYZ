import '../css/style.css';
//Contact button
const modal = document.getElementById("contactModal");
const btn = document.getElementById("contactBtn");
const span = document.querySelector(".closeFlex");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

btn.addEventListener("click", function() {
    if (modal.style.display === "block") {
        closeModal();
    } else {
        openModal();
    }
});

span.addEventListener("click", closeModal);

window.addEventListener("click", function(event) {
    if (event.target !== modal && event.target !== btn) {
        closeModal();
    }
});

