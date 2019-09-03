function hamburgerChange(change) {
    change.classList.toggle('hamburger__change');
}

document.querySelector('.hamburger').addEventListener('click', function() {
    hamburgerChange(this);
    document.querySelector('.hamburger-menu').classList.toggle('hamburger-menu-visible');
});