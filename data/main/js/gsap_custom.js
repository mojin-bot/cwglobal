

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "power1", duration: 3});
const tl = gsap.timeline();
    ScrollTrigger.create({
        animation: tl,
        trigger: ".area_wa",
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: true,
        anticipatePin: 1
    });
    ScrollTrigger.create({
        animation: tl,
        trigger: ".area_wb",
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: true,
        anticipatePin: 1
    });
    ScrollTrigger.create({
        animation: tl,
        trigger: ".area_wc",
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: true,
        anticipatePin: 1
    });
    ScrollTrigger.create({
        animation: tl,
        trigger: ".area_wd",
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: true,
        anticipatePin: 1
    });
    ScrollTrigger.create({
        animation: tl,
        trigger: ".area_we",
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: true,
        anticipatePin: 1
    });
    ScrollTrigger.create({
        animation: tl,
        trigger: ".area_wf",
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: true,
        anticipatePin: 1
    });












gsap.to(  ".wht-inner__banner--swiper",{    
    scrollTrigger: {
        trigger: ".wht-inner__banner--swiper",
        start:"40% 60%",
        end:"60% 10%",
        pin:".ghost",
        id:"peh",
        toggleClass:"active",
        scrub: 4,
        markers: false,
    },
    rotationY:7, 
    x:160,
    /*
    x:400,
    rotation:320,
    scale:1,
    ease:"none",
    duration:3,*/
});


/*


*/