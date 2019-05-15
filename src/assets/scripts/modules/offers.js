let btn = document.getElementById('offers-close');
let offers = document.getElementById('offers');
let offersList = document.getElementById('offers-list-open');
let btnClose = document.getElementById('offers-list-close');

btn.addEventListener('click', function(){
    offers.classList.add('offers--close');
    offersList.classList.add('offers-list--active');
});

btnClose.addEventListener('click', function(){

    offers.classList.remove('offers--close');
    offersList.classList.remove('offers-list--active');
});