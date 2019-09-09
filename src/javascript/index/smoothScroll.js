//Jump to top when the logo is clicked

$('#home').click(function(event) {
    event.preventDefault();
    
    $('html, body').animate({scrollTop: 0}, 0);
});

// Navbar scroll animation behavior

$(".h").click(function() {
    $('html, body').animate({
        scrollTop: $("#nav-home").offset().top-100
    }, 800);
});

$(".f").click(function() {
    $('html, body').animate({
        scrollTop: $("#nav-features").offset().top-95
    }, 800);
});

$('.p').click(function() {
    $('html, body').animate({
        scrollTop: $("#nav-pricing").offset().top-95
    }, 800);
});

$('.c').click(function() {
    $('html, body').animate({
        scrollTop: $("#nav-company").offset().top-135
    }, 800);
});

// Hamburger navigation scroll behavior

$(".burger-h").click(function() {
    $('html, body').animate({
        scrollTop: $("#nav-home").offset().top-100
    }, 400);
});

$(".burger-f").click(function() {
    $('html, body').animate({
        scrollTop: $("#nav-features").offset().top-15
    }, 400);
});

$('.burger-p').click(function() {
    $('html, body').animate({
        scrollTop: $("#nav-pricing").offset().top-15
    }, 400);
});

$('.burger-c').click(function() {
    $('html, body').animate({
        scrollTop: $("#nav-company").offset().top-15
    }, 400);
});