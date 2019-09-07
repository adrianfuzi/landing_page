const loginLink = document.querySelector('.signup__login-link');
const loginForm = document.querySelector('.login-wrapper');
// const loginFormClose = document.querySelector('.login__close--img');
const signupForm = document.querySelector('.signup-wrapper');
const registerLink = document.querySelector('.login__signup-link');

function openLogin() {
    setTimeout(() => {
        loginForm.style.opacity = '1';
    }, 10);
    loginForm.style.display = 'flex';

    setTimeout(() => {
        signupForm.style.opacity = '0';
    }, 10);
    signupForm.style.display = 'none';
}

function closeLogin() {
    setTimeout(() => {
        loginForm.style.opacity = '0';
    }, 10);
    loginForm.style.display = 'none';

    setTimeout(() => {
        signupForm.style.opacity = '1';
    }, 10);
    signupForm.style.display = 'flex';
}


loginLink.addEventListener('click', openLogin);
registerLink.addEventListener('click', closeLogin);

