// JAVASCRIPT FILE FOR IMOS REMAKE

// DATA FOR IMOS REMAKE

const slideImages = [
  "url('./images/slides/slide0.jpg')",
  "url('./images/slides/slide1.jpg')",
  "url('./images/slides/slide2.png')",
];

// **********************************************************
// ************** SLIDE SHOW CODE ***************************
// **********************************************************

var slideIndex = 1;
//CREATE CONSTANT FOR SLIDE DIV
const el = document.getElementById("slide");
const sqrEl = document.getElementById("square-container");
const contEl = document.getElementsByClassName("slide-content-module");

//INITIALIZE SLIDESHOW WITH IIFE 
(function() {
  for (let i=0; i<slideImages.length; i++){
    let sqr = document.createElement("div");
    sqr.setAttribute("class", "slide-marker");
    sqrEl.appendChild(sqr);
    el.style.backgroundImage = "url('./images/slides/slide0.jpg')";
  }
  document.getElementsByClassName("slide-marker")[0].setAttribute("id","marked");
  contEl[0].style.display = "block";
}());

//HANDLE SLIDES

function handleSlides() {
  console.log("handleSlides Called....")
  
  let slideMarker = document.getElementsByClassName("slide-marker");
  el.style.backgroundImage = slideImages[0];


  function changeSlides() {
   
    if (slideIndex < slideImages.length && slideIndex > 0) {
      console.log("ChangeSlide called if....")
      el.style.backgroundImage = slideImages[slideIndex];
      document.getElementById("marked").removeAttribute("id");
      slideMarker[slideIndex].setAttribute("id", "marked");
      contEl[slideIndex-1].style.display = "none";
      contEl[slideIndex].style.display = "block";
      return slideIndex += 1;
    }else {
      console.log("ChangeSlide called else....")
      slideIndex = 0;
      el.style.backgroundImage = slideImages[slideIndex];
      document.getElementById("marked").removeAttribute("id");
      slideMarker[slideIndex].setAttribute("id", "marked");
      contEl[slideImages.length-1].style.display = "none";
      contEl[slideIndex].style.display = "block";
      return slideIndex = 1;
    }
  }
  changeSlides();
}

//RUN SLIDE SHOW
setInterval(handleSlides,5000);

// **********************************************************
// ************** END SLIDE SHOW CODE ***********************
// **********************************************************