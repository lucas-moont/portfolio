"use strict";
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    function appearsFromLeftWithOpacityChange(element) {
        gsap.fromTo(element, {
            x: `-64px`,
            opacity: 0,
        }, {
            x: "0%",
            opacity: 1,
            duration: 1,
            ease: "power1",
            scrollTrigger: {
                trigger: element,
                start: "top center",
                end: "top center",
            },
        });
    }
    function appearsFromRightWithOpacityChange(element) {
        gsap.fromTo(element, {
            x: `64px`,
            opacity: 0,
        }, {
            x: "0%",
            opacity: 1,
            duration: 1,
            ease: "power1",
            scrollTrigger: {
                trigger: element,
                start: "top center",
                end: "top center",
            },
        });
    }
    const appearFromLeftWithOpacity = document.querySelector(".appearFromLeftWithOpacity");
    const appearFromRightWithOpacity = document.querySelector(".appearFromRightWithOpacity");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) {
        appearsFromLeftWithOpacityChange(appearFromLeftWithOpacity);
        appearsFromRightWithOpacityChange(appearFromRightWithOpacity);
    }
});
