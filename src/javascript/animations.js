TweenMax.from('.hero__box', 1, {x: -200, opacity: 0, ease:Power1.easeOut});
TweenMax.from('.hero__img', 1, {y: 300, opacity: 0, ease:Power1.easeOut}).delay(.5);
TweenMax.from('.hero__scroll', 1, {opacity: 0, ease:Power1.easeOut}).delay(1);