"use strict";
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    function appearsFromLeft(element) {
        gsap.fromTo(element, {
            x: `-120%`,
        }, {
            x: "0%",
            opacity: 1,
            duration: 0.8,
            ease: "power1",
            scrollTrigger: {
                trigger: element,
                start: "top center",
                end: "top center",
            },
        });
    }
    const backEndProjects = document.querySelectorAll(".backEndProjects");
    if (backEndProjects.length > 0) {
        backEndProjects.forEach(backEndProject => {
            appearsFromLeft(backEndProject);
        });
    }
});
