const loginBtn = document.querySelectorAll('.header__nav--item-btn');
const loginBurger = document.querySelector('.hamburger__menu--nav-button');
const loginClose = document.querySelector('.login__close--img');
const login = document.querySelector('.login-wrapper');
const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');

function openLogin() {
    login.style.display = 'flex';
    login.classList.remove('login-wrapper-hidden');
    login.classList.remove('login-wrapper-disabled');
    hamburger.classList.remove('hamburger__change');
    hamburgerMenu.classList.remove('hamburger-menu-visible');
    TweenMax.from('.login-wrapper', .3, {y: -400, ease:Power1.easeOut});
}

function closeLogin() {
    login.classList.add('login-wrapper-hidden');
    login.classList.add('login-wrapper-disabled');
}

loginBtn.forEach(el => {
    el.addEventListener('click', () => {
        openLogin();
    })
});

loginBurger.addEventListener('click', openLogin);

loginClose.addEventListener('click', closeLogin);
