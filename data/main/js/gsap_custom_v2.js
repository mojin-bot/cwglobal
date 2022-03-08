gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "power1", duration: 3});

gsap.to(  ".area_wa .wht-inner__txt--lineend",{    
    scrollTrigger: {
        trigger: ".area_wa",
        start: "top top",
        end: "+=800",           
        scrub: 3,  
        pin:true, 
        markers: false,
    },
    x:-200
});
gsap.to(  ".area_wa .wht-inner__model_a",{    
    scrollTrigger: {
        trigger: ".area_wa",
        start: "top top",
        end: "+=800",           
        scrub: 3,  
        pin:true, 
        markers: false,
    },
    x:30,
    rotation:30,  
    scale:1.2,
});
gsap.to(  ".area_wa .wht-inner__model_b",{    
    scrollTrigger: {
        trigger: ".area_wa",
        start: "top top",
        end: "+=800",           
        scrub: 3,  
        pin:true, 
        markers: false,
    },
    x:30,
    rotation:30,  
    scale:1.2,
}); 
gsap.to(  ".area_wa .wht-inner__model_c",{    
    scrollTrigger: {
        trigger: ".area_wa",
        start: "top top",
        end: "+=800",           
        scrub: 3,  
        pin:true, 
        markers: false,
    },
    x:30,
    rotation:-30,  
    scale:1.2,
}); 

/* /////1end */

/*gsap.to(  ".area_wc .wht-inner__txt--sub, .area_wc .wht-inner__txt--sub-bottom, .area_wc .wht-inner__txt--title",{    

 */
gsap.to(  ".area_wc .wht-inner__txt--lineend ",{    
    scrollTrigger: {
        trigger: ".area_wc",
        start: "top 10%",  
        end: "+=800",           
        scrub: 3,  
        pin:true, 
        markers: false,
    },
    x:480
});
gsap.to(  ".area_wc .wht-inner__model img",{    
    scrollTrigger: {
        trigger: ".area_wc",
        start: "top 10%",  
        end: "+=800",           
        scrub: 3, 
        markers: false,
    },
    x:30,
    rotation:0, 
});
gsap.to(  ".area_wd .wht-inner__txt--lineend ",{    
    scrollTrigger: {
        trigger: ".area_wd",
        start: "top 10%",  
        end: "+=800",           
        scrub: 3,  
        pin:true, 
        markers: false,
    },
    x:-180 
});

gsap.to(  ".area_wd .wht-inner__model img",{    
    scrollTrigger: {
        trigger: ".area_wd",
        start: "top 10%",  
        end: "+=800",           
        scrub: 3, 
        markers: false,
    },
    x:80,
    rotation:0, 
    scale:1.1,  
});

/*








/*

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "power1", duration: 3});
const tl = gsap.timeline();
    ScrollTrigger.create({
        animation: tl,
        trigger: ".area_wa",
        start: "top top",
        end: "+=1600",
        pin: true,
        scrub: true,
        anticipatePin: 1
    }); 
    ScrollTrigger.create({
        animation: tl,
        trigger: ".area_wb",
        start: "top top",
        end: "+=1000",
        pin: true,
        scrub: true,
        anticipatePin: 1
    });
    ScrollTrigger.create({
        animation: tl,
        trigger: ".area_wc",
        start: "top top",
        end: "+=1000",
        pin: true,
        scrub: true,
        anticipatePin: 1
    });
    ScrollTrigger.create({
        animation: tl,
        trigger: ".area_wd",
        start: "top top",
        end: "+=1000",
        pin: true,
        scrub: true,
        anticipatePin: 1
    });
    ScrollTrigger.create({
        animation: tl,
        trigger: ".area_we",
        start: "top top",
        end: "+=600",
        pin: true,
        scrub: true,
        anticipatePin: 1
    });
    ScrollTrigger.create({
        animation: tl,
        trigger: ".area_wf",
        start: "top top",
        end: "+=1000",
        pin: true,
        scrub: true,
        anticipatePin: 1
    });


    gsap.from(  ".wht-inner__model_a",{    
        scrollTrigger: {
            trigger: ".area_wa",
            start:"40% 60%",
            end:"60% -100%",               
            scrub: 3,  
            markers: false,
        },
        x:-780,
        y:30, 
        rotation:-80,
        scale:1.2,
    });
    gsap.from(  ".wht-inner__model_b",{    
        scrollTrigger: {
            trigger: ".area_wa",
            start:"50% 60%",
            end:"50% -100%",            
            scrub: 3,
            markers: false, 
        },
        x:-500, 
        y:300, 
        rotation:-30, 
        scale:1.2,
    });
    gsap.from(  ".wht-inner__model_c",{    
        scrollTrigger: {
            trigger: ".area_wa",
            start:"50% 40%",
            end:"260% 30%",           
            scrub: 3,
            markers: false,
        },
        x:-190,
        y:-350,
        rotation:80,
        scale:1.05,
    });
    gsap.from(  ".wht-inner__txt--title, .wht-inner__txt--sub",{     
        scrollTrigger: {
            trigger: ".area_wa",
            start:"80% 60%",
            end:"150% 10%",            
            scrub: 3,
            markers: false,
        },
        x:640,
    });

    gsap.to(  ".wht-inner__banner--area_wb-gs{",{     
        scrollTrigger: {
            trigger: ".area_wb",
            start:"40% 60%",
            end:"60% 10%",     
            scrub: 3,
            markers: true,
        },
        scale:0.5,
        ease:"none",
        duration:3
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

});



*/









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

});

gsap.to(  ".wht-inner__banner--video",{    
    scrollTrigger: {
        trigger: ".area_wf",
        start:"40% 80%",
        end:"60% 10%",
        pin:".ghost",
        id:"peh",
        scrub: 1,
        markers: false,
    },
    rotationY:-3, 
    x:0,
});
gsap.to(  ".area_wf .wht-inner__banner--line",{    
    scrollTrigger: {
        trigger: ".area_wf",
        start:"40% 80%",
        end:"60% 10%",
        pin:".ghost",
        id:"peh",
        scrub: 1,
        markers: false,
    },
    rotation:-3, 
    x:-500,
});
