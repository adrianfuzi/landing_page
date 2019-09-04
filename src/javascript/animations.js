if ( $(window).width() >= 1207) {  

    TweenMax.from('.hero__box', 1, {x: -200, opacity: 0, ease:Power1.easeOut});
    TweenMax.from('.hero__img', 1, {y: 300, opacity: 0, ease:Power1.easeOut}).delay(.5);
    TweenMax.from('.hero__scroll', 1, {opacity: 0, ease:Power1.easeOut}).delay(1);


    const t1 = TweenMax.from(".features__title", 1, {opacity:0, paused:true, ease:Power2.easeOut}), t1Scroll = {"start": 100, "stop": 400};

    const t2 = TweenMax.from(".features__description", 1, {opacity:0, x:-200, paused:true, ease:Power2.easeOut}), t2Scroll = {"start":400, "stop":600};

    const t3 = TweenMax.from(".features__box", 1, {opacity:0, paused:true, ease:Power2.easeOut}), t3Scroll = {"start": 600, "stop": 800};

    const t4 = TweenMax.from(".pricing__title", 1, {opacity:0, x: -200, paused:true, ease:Power2.easeOut}), t4Scroll = {"start": 800, "stop": 1200};

    const t5 = TweenMax.from(".pricing__box", 1, {opacity:0, y: 200, paused:true, ease:Power2.easeOut}), t5Scroll = {"start": 1200, "stop": 1500};

    const t6 = TweenMax.from(".company__img", 1, {opacity:0, x: -200, paused:true, ease:Power2.easeOut}), t6Scroll = {"start": 1500, "stop": 2300};

    const t7 = TweenMax.from(".company__box", 1, {opacity:0, paused:true, ease:Power2.easeOut}), t7Scroll = {"start": 1500, "stop": 2300};

    const t8 = TweenMax.from(".feedback__title", 1, {opacity:0, x: -200, paused:true, ease:Power2.easeOut}), t8Scroll = {"start": 2300, "stop": 2500};

    const t9 = TweenMax.from(".feedback__box", 1, {opacity:0, y: 100, paused:true, ease:Power2.easeOut}), t9Scroll = {"start": 2500, "stop": 2700};

    // const t10 = TweenMax.from("#feedback-person-2", 1, {opacity:0, y: 200, paused:true, ease:Power2.easeOut}), t10Scroll = {"start": 2600, "stop": 2800};

    $(window).on("scroll",function(){

        const windowTop = $(window).scrollTop();

        const t1Current = windowTop, t1Progress = ( t1Current - t1Scroll.start ) / ( t1Scroll.stop - t1Scroll.start );

        if(t1Current > t1Scroll.start && t1Current < t1Scroll.stop) {
            t1.progress(t1Progress);
        } else if ( t1Current < t1Scroll.start ) {
            t1.progress(0);
        } else if ( t1Current < t1Scroll.stop ) {
            t1.progress(1);
        }

        const t2Current = windowTop, t2Progress = ( t2Current - t2Scroll.start ) / ( t2Scroll.stop - t2Scroll.start );

        if(t2Current > t2Scroll.start && t2Current < t2Scroll.stop) {
            t2.progress(t2Progress);
        } else if ( t2Current < t2Scroll.start ) {
            t2.progress(0);
        } else if ( t2Current < t2Scroll.stop ) {
            t2.progress(1);
        }

        const t3Current = windowTop, t3Progress = ( t3Current - t3Scroll.start ) / ( t3Scroll.stop - t3Scroll.start );

        if(t3Current > t3Scroll.start && t3Current < t3Scroll.stop) {
            t3.progress(t3Progress);
        } else if ( t3Current < t3Scroll.start ) {
            t3.progress(0);
        } else if ( t2Current < t3Scroll.stop ) {
            t3.progress(1);
        }

        const t4Current = windowTop, t4Progress = ( t4Current - t4Scroll.start ) / ( t4Scroll.stop - t4Scroll.start );

        if(t4Current > t4Scroll.start && t4Current < t4Scroll.stop) {
            t4.progress(t4Progress);
        } else if ( t4Current < t4Scroll.start ) {
            t4.progress(0);
        } else if ( t4Current < t4Scroll.stop ) {
            t4.progress(1);
        }

        const t5Current = windowTop, t5Progress = ( t5Current - t5Scroll.start ) / ( t5Scroll.stop - t5Scroll.start );

        if(t5Current > t5Scroll.start && t5Current < t5Scroll.stop) {
            t5.progress(t5Progress);
        } else if ( t5Current < t5Scroll.start ) {
            t5.progress(0);
        } else if ( t5Current < t5Scroll.stop ) {
            t5.progress(1);
        }

        const t6Current = windowTop, t6Progress = ( t6Current - t6Scroll.start ) / ( t6Scroll.stop - t6Scroll.start );

        if(t6Current > t6Scroll.start && t6Current < t6Scroll.stop) {
            t6.progress(t6Progress);
        } else if ( t6Current < t6Scroll.start ) {
            t6.progress(0);
        } else if ( t6Current < t6Scroll.stop ) {
            t6.progress(1);
        }

        const t7Current = windowTop, t7Progress = ( t7Current - t7Scroll.start ) / ( t7Scroll.stop - t7Scroll.start );

        if(t7Current > t7Scroll.start && t7Current < t7Scroll.stop) {
            t7.progress(t7Progress);
        } else if ( t7Current < t7Scroll.start ) {
            t7.progress(0);
        } else if ( t7Current < t7Scroll.stop ) {
            t7.progress(1);
        }

        const t8Current = windowTop, t8Progress = ( t8Current - t8Scroll.start ) / ( t8Scroll.stop - t8Scroll.start );

        if(t8Current > t8Scroll.start && t8Current < t8Scroll.stop) {
            t8.progress(t8Progress);
        } else if ( t8Current < t8Scroll.start ) {
            t8.progress(0);
        } else if ( t8Current < t8Scroll.stop ) {
            t8.progress(1);
        }

        const t9Current = windowTop, t9Progress = ( t9Current - t9Scroll.start ) / ( t9Scroll.stop - t9Scroll.start );

        if(t9Current > t9Scroll.start && t9Current < t9Scroll.stop) {
            t9.progress(t9Progress);
        } else if ( t9Current < t9Scroll.start ) {
            t9.progress(0);
        } else if ( t9Current < t9Scroll.stop ) {
            t9.progress(1);
        }

        // const t10Current = windowTop, t10Progress = ( t10Current - t10Scroll.start ) / ( t10Scroll.stop - t10Scroll.start );

        // if(t10Current > t10Scroll.start && t10Current < t10Scroll.stop) {
        //     t10.progress(t10Progress);
        // } else if ( t10Current < t10Scroll.start ) {
        //     t10.progress(0);
        // } else if ( t10Current < t10Scroll.stop ) {
        //     t10.progress(1);
        // }

    });

} else {
    TweenMax.from('.hero__box--title', 1, {x: -200, opacity: 0, ease:Power1.easeOut});
    TweenMax.from('.hero__box--text', 1, {x: 200, opacity: 0, ease:Power1.easeOut});
    TweenMax.from('.hero__box--btn', 1, {opacity: 0, ease:Power1.easeOut});
    TweenMax.from('.hero__img', 1, {opacity: 0, scale: .5, ease:Power1.easeOut}).delay(.5);
}