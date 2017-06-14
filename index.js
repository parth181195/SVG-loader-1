    var tl = new TimelineMax({ repeat: -1 });
    tl.to('.social-1', 1, {
            attr: { cy: 175, r: 20 },
            ease: Power2.easeInOut,
        }).to('.social-1', 1, {
            attr: { cy: 250, r: 10 },
            ease: Power2.easeInOut,
        })
        .to('.social-2', 1, {
            attr: { cx: 325, r: 20 },
            ease: Power2.easeInOut,
        }, "-=1.5")
        .to('.social-2', 1, {
            attr: { cx: 250, r: 10 },
            ease: Power2.easeInOut,
        }, "-=0.5")
        .to('.social-3', 1, {
            attr: { cy: 325, r: 20 },
            ease: Power2.easeInOut,
        }, "-=1.5")
        .to('.social-3', 1, {
            attr: { cy: 250, r: 10 },
            ease: Power2.easeInOut,
        }, "-=0.5")
        .to('.social-5', 1, {
            attr: { cx: 175, r: 20 },
            ease: Power2.easeInOut,
        }, "-=1.5")
        .to('.social-5', 1, {
            attr: { cx: 250, r: 10 },
            ease: Power2.easeInOut,
        }, "-=0.5")
        .to('.circle', 4, {
            rotation: 360,
            transformOrigin: "50% 50%",
            ease: Power4.easeInOut,
        }, '-=4');