// HAMBURGER MENU OVERLAY

let overlay = document.getElementById('overlay');
let hamburger = document.querySelector('.header__hamburger');
let bars = document.querySelectorAll('.header__hamburger div');
let logo = document.querySelector('.header__nav-img');
let body = document.querySelector('body');

hamburger.addEventListener('click', function (e) {
    bars.forEach(function (element) {
            element.classList.toggle('change')
        }
    );
    overlay.classList.toggle('active');
    logo.classList.toggle('hidden');
    body.classList.toggle('no-scroll');
});