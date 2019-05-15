var slides = document.getElementsByClassName("reviews__slide");
var btnNext = document.getElementById('next');
var btnPrev = document.getElementById('prev');



let slideIndex = 1;
showSlides(slideIndex);

btnNext.addEventListener('click', function plusSlide(){
    showSlides(slideIndex += 1);
});

btnPrev.addEventListener('click', function plusSlide(){
    showSlides(slideIndex -= 1);
});





function showSlides(n) {
    var i;

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}