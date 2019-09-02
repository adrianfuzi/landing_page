function hamburgerChange(change) {
    change.classList.toggle('hamburger__change');
}

document.querySelector('.hamburger').addEventListener('click', function() {
    hamburgerChange(this);
    document.querySelector('.hamburger__menu').classList.toggle('hamburger__menu-visible');
});