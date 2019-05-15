let slides = document.getElementsByClassName("how-it-works__slide");
let supplier = document.getElementById('supplier');
let client = document.getElementById('client');

let slideIndex = 1;
showSlides(slideIndex);

supplier.addEventListener('click', function plusSlide(){
    supplier.classList.add('how-it-works__link_active');
    client.classList.remove('how-it-works__link_active');
    showSlides(slideIndex += 1);
});

client.addEventListener('click', function plusSlide(){
    client.classList.add('how-it-works__link_active');
    supplier.classList.remove('how-it-works__link_active');
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