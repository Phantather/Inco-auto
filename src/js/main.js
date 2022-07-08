//кнопка для обратной связи
let btnCall = document.querySelector('.btn_call');

let overlay = document.querySelector('.overlay');
let close = document.querySelector('.popup__close');

let call = document.querySelector('.popup__call');
let test = document.querySelector('.popup__test');
let rent = document.querySelector('.popup__rent')

let btnTest = document.querySelector('.btn_test');

let btnRent = document.querySelector('.btn_rent')





btnCall.addEventListener('click', function () {
    overlay.style.display = 'flex';
    test.style.display = 'none';
    rent.style.display = 'none'
    call.style.display = 'flex'
});

btnTest.addEventListener('click', function () {
    overlay.style.display = 'flex';
    call.style.display = 'none';
    rent.style.display = 'none';
    test.style.display = 'flex'
});

btnRent.addEventListener('click', function () {
    overlay.style.display = 'flex';
    call.style.display = 'none';
    test.style.display = 'none';
    rent.style.display = 'flex'
});


close.addEventListener('click', function () {
    overlay.style.display = 'none'
});


overlay.addEventListener('click', function (e) {
    if (e.target.className.includes('overlay')) {
        overlay.style.display = 'none'
    }

});