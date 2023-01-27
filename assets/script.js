var header = document.getElementById("header");

window.onscroll = function () {
  var scrollPos = window.pageYOffset;

  if (scrollPos > header.getBoundingClientRect().height) {
    header.classList.add("visible");
  } else {
    header.classList.remove("visible");
  }
}

var texts = [" first", " second", " third"];
var i = 0;
var j = 0;
var k = 0;
var speed = 125;

function typeWriter() {
  if (j < texts[i].length) {
    document.getElementById("demo").innerHTML += texts[i].charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(function () {
      if (k < texts[i].length) {
        document.getElementById("demo").innerHTML = texts[i].slice(0, -(k + 1));
        k++;
        setTimeout(typeWriter, speed);
      } else {
        j = 0;
        k = 0;
        i++;
        if (i < texts.length) {
          setTimeout(typeWriter, speed);
        } else {
          i = 0;
          setTimeout(typeWriter, speed);
        }
      }
    }, 500);
  }
}


// Function to show the overlay
function showOverlay() {
  var overlay = document.getElementById("overlay");
  overlay.classList.add("visible");
}

// Function to hide the overlay
function hideOverlay() {
  var overlay = document.getElementById("overlay");
  overlay.classList.remove("visible");
}

// Function to handle the animation for the words
function animateWords() {
  var words = document.getElementsByClassName("word");
  for (var i = 0; i < words.length; i++) {
    words[i].classList.add("animated");
  }
}

// Add event listeners to the "Learn More" button and "Close" button
document.getElementById("learn-more-button").addEventListener("click", showOverlay);
document.getElementById("close-button").addEventListener("click", hideOverlay);

// Add event listener to the window to handle the animation when the page is loaded
window.addEventListener("load", animateWords);
