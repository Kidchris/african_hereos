var header = document.getElementById("header");

window.onscroll = function () {
  var scrollPos = window.pageYOffset;

  if (scrollPos > header.getBoundingClientRect().height) {
    header.classList.add("visible");
  } else {
    header.classList.remove("visible");
  }
}

var texts = [" first", " second .", " third."];
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
    setTimeout(function(){
        document.getElementById("demo").innerHTML = "";
        j = 0;
        i++;
        if (i < texts.length) {
            setTimeout(typeWriter, 0);
        } else {
            i = 0;
            setTimeout(typeWriter, 2000);
        }
    }, 5000);
  }
}




// // array of text
// var texts = ["text 1","text 2", "text 3"];

// // index of the current text
// var index = 0;

// // set interval
// setInterval(function(){
//     // get the text element
//     var textEl = document.getElementById("text");
//     // remove any previous animation class
//     textEl.classList.remove("animated-text");
//     // set the innerHTML of the text element to the current text
//     textEl.innerHTML = texts[index];

//     // Use setTimeout to wait for the text to be rendered before adding the class
//     setTimeout(function(){
//         textEl.classList.add("animated-text");
//     }, 0);

//     // increment the index for the next text
//     index++;

//     // if we reach the end of the texts, start from the beginning
//     if(index >= texts.length){
//         index = 0;
//     }
// }, 10000);

// var button = document.getElementById("learn-more-button");
// var overlay = document.getElementById("overlay");

// button.addEventListener("click", function(){
//     overlay.classList.toggle("visible");
// });

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
