// JAVASCRIPT FILE FOR IMOS REMAKE

// DATA FOR IMOS REMAKE

const slideImages = [
  "url('./images/slides/slide0.jpg')",
  "url('./images/slides/slide1.jpg')",
]

const el = document.getElementById("slide");

//INITIALIZE SLIDESHOW WITH IIFE 
(function() {
  el.style.backgroundImage = slideImages[0];
}());

function changeSlide() {
  
  
}

setInterval(() => {
  
},5000)