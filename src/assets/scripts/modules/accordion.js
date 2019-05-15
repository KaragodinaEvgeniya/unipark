let colorStatus = 0;

let btn = document.getElementById('color');

btn.addEventListener('click', function(){

    let color = document.getElementById('color-list');
    let iconOpen = document.getElementById('color-open');

    if (colorStatus === 0) {
        color.classList.add('accordion__submenuItems-list--open');
        iconOpen.classList.add('accordion__icon--focus');
        colorStatus = 1;
    } else {
        color.classList.remove('accordion__submenuItems-list--open');
        iconOpen.classList.remove('accordion__icon--focus');
        colorStatus = 0;
    }
});

let  quantityStatus = 0;
let quantityBtn = document.getElementById('quantity');

quantityBtn.addEventListener('click', function(){

    let quantity = document.getElementById('quantity-list');
    let quantityOpen = document.getElementById('quantity-open');

    if ( quantityStatus === 0){
        quantity.classList.add('accordion__submenuItems-list--open');
        quantityOpen.classList.add('accordion__icon--focus');
        quantityStatus = 1;
    } else {
        quantity.classList.remove('accordion__submenuItems-list--open');
        quantityOpen.classList.remove('accordion__icon--focus');
        quantityStatus = 0;
    }
});

let  priceStatus = 0;

let priceBtn = document.getElementById('price');

priceBtn.addEventListener('click', function(){

    let price = document.getElementById('price-list');
    let priceOpen = document.getElementById('price-open');

    if (priceStatus === 0){
        price.classList.add('accordion__submenuItems-list--open');
        priceOpen.classList.add('accordion__icon--focus');
        priceStatus = 1;
    } else {
        price.classList.remove('accordion__submenuItems-list--open');
        priceOpen.classList.remove('accordion__icon--focus');
        priceStatus = 0;
    }

});

