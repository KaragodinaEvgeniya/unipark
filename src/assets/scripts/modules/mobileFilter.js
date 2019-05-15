let btn= document.getElementById('openFilter');

btn.addEventListener('click', function(){

    let menu= document.getElementById('filter');
    menu.classList.add('mobile-filter--open');



});

let FilterReturn= document.getElementById('return');

FilterReturn.addEventListener('click', function(){
    let menu= document.getElementById('filter');
    menu.classList.remove('mobile-filter--open');
});







