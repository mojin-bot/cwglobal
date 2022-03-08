
gsap.registerPlugin(ScrollTrigger);

gsap.to(  ".area_wa .wht-inner__model_a",{    
    scrollTrigger: {
        trigger: ".area_wa",
        start:"70% 60%",
        end:"70% 10%",
        scrub: 1,  
        pin:true,
        markers: true,
    },
    x:-130,   
    rotation:0,  
    scale:1.2, 
    duration: 1
});

/*

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



*/
