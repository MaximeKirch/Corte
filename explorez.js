    let slideIndex = 1;
    showSlides(slideIndex);

//Next/prev boutons 

 function plusSlide(n) {
     showSlides(slideIndex += n);
 }

 // Images control

 function currentSlide(n) {
     showSlides(slideIndex = n);
 }

 function showSlides(n) {
     let i;
     let slides = document.getElementsByClassName("mySlides");
     let dots = document.getElementsByClassName("dot");
     if (n > slides.length) {slideIndex = 1}
     if (n < 1) {slideIndex = slides.length}
     for(i = 0; i < slides.length; i++) {
         slides[i].style.display ="none";
     }
     for(i= 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", " ");
     }
     slides[slideIndex-1].style.display = "block";
     dots[slideIndex-1].className += "active";

 }



// Pour l'ajout d'un slide auto avec le temps d'affichage en MS mais à ce moment là les contrôles deviennent indisponibles 

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     for (i=0; i<slides.length; i++) {
//         slides[i].style.display ="none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1}
//     slides[slideIndex-1].style.display="block";
//     setTimeout(showSlides, 6000); // L'image changera toutes les 6 secondes
// }