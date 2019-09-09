window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    let stickyHeader = '.header__sticky';

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.querySelector(stickyHeader).style.top = '0';
    } else {
        document.querySelector(stickyHeader).style.top = '-8rem';
    }
}