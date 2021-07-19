

// Slider animation

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideImg");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Modal image

let modal = document.getElementById("myModal");
let images = document.getElementsByClassName("img");
let modalImg = document.getElementById("img1");
let captionText = document.getElementById("modalCaption");

// Loop for multiple images 

for (let i = 0; i < images.length; i++) {
  let img = images[i];
  img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  }
}

// Get the close span

let span = document.getElementsByClassName("close")[0];

// Close modal on click X

span.onclick = function() {
  modal.style.display = "none";
}


