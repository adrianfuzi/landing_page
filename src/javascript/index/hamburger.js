const hamburgerIcon = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navItem = document.querySelectorAll('.hamburger-menu--nav-item');

function hamburgerChange(change) {
    change.classList.toggle('hamburger__change');
}

function closeMenu() {
    hamburgerIcon.classList.remove('hamburger__change');
    hamburgerMenu.classList.remove('hamburger-menu-visible');
}

hamburgerIcon.addEventListener('click', function() {
    hamburgerChange(this);
    hamburgerMenu.classList.toggle('hamburger-menu-visible');
});

navItem.forEach(el => {
    el.addEventListener('click', () => {
        closeMenu();
    });
});
