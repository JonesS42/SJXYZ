import './../css/style.css';
import ccVid from './../ImagesEtc/CroquetClash.mp4';
import hfVid from './../ImagesEtc/HeistFlight.mp4';
import ffVid from './../ImagesEtc/FlightyFlap.mp4';

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

