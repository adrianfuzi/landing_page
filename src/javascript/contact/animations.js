if ( $(window).width() > 1062) {  

    TweenMax.from('.contact-title', 1, {x: -400, opacity: 0, ease:Power1.easeOut});
    TweenMax.from('.img__box', 1, {y: 300, opacity: 0, ease:Power1.easeOut}).delay(.5);
    TweenMax.from('.contact', 1, {opacity: 0, ease:Power1.easeOut}).delay(1);

} else {
    TweenMax.from('.contact-title', 1, {y: -50, opacity: 0, ease:Power1.easeOut});
    TweenMax.from('.contact', 1, {y: -500, opacity: 0, ease:Power1.easeOut}).delay(.5);
    TweenMax.from('.img__box', 1, {y: -45, opacity: 0, ease:Power1.easeOut}).delay(1);
}