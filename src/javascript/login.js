const loginBtn = document.querySelectorAll('.header__nav--item-btn');
const loginBurger = document.querySelector('.hamburger__menu--nav-button');
const loginClose = document.querySelector('.login__close--img');
const login = document.querySelector('.login-wrapper');
const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');

function openLogin() {
    setTimeout(() => {
        login.style.opacity = '1';
    }, 10);
    login.style.display = 'flex';
    hamburger.classList.remove('hamburger__change');
    hamburgerMenu.classList.remove('hamburger-menu-visible');
    TweenMax.from('.login-wrapper', .3, {y: -600, ease:Power1.easeOut});
}

function closeLogin() {
    login.style.opacity = '0';
    setTimeout(() => {
        login.style.display = 'none';
    }, 1000);
}

loginBtn.forEach(el => {
    el.addEventListener('click', () => {
        openLogin();
    })
});

loginBurger.addEventListener('click', openLogin);

loginClose.addEventListener('click', closeLogin);
