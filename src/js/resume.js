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


//experience description
function expCollapse () {
  var btn = document.getElementsByClassName("expCollapse");

  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (e) {

      this.classList.toggle("expanded");
      this.classList.toggle("expCollapseActive");
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
        e.target.querySelector(`.sunf${i}`).classList.add("bounce");
      }
    }
    
    function hovLeave (e) {
      var startIndex = 5 - e.target.children.length;
      for (var i = startIndex; i < 5; i++) {
        e.target.querySelector(".sunf" + i).classList.remove("bounce");
      }
    }
  }
}



window.onload = () => {
  console.log("loaded");
  hovNull();
  expCollapse();
}
