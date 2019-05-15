
let btn = document.getElementById('type');

btn.addEventListener('click', function(){

    let icon = document.getElementById('type-open');
    icon.classList.toggle('mobile-filter__icon--focus');

});

let brand = document.getElementById('brand');

brand.addEventListener('click', function(){

    let iconBrand = document.getElementById('brand-open');
    iconBrand.classList.toggle('mobile-filter__icon--focus');

});


let model = document.getElementById('model');

model.addEventListener('click', function(){

    let iconModel = document.getElementById('model-open');
    iconModel.classList.toggle('mobile-filter__icon--focus');

});

let year = document.getElementById('year');

year.addEventListener('click', function(){

    let iconYear = document.getElementById('year-open');
    iconYear.classList.toggle('mobile-filter__icon--focus');

});

