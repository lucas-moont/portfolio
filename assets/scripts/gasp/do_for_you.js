"use strict";
/// <reference types="gsap" />
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    const whatICanDoForYouSection = document.querySelector("#whatICanDoForYou");
    const whatICanDoForYouLeftHorizontalBorder = document.querySelector(".whatICanDoForYouLeftHorizontalBorder .whatICanDoForYouBorderInnerColor");
    const whatICanDoForRightHorizontalBorder = document.querySelector(".whatICanDoForRightHorizontalBorder .whatICanDoForYouBorderInnerColor");
    function growWidth(element, width, section) {
        gsap.fromTo(element, {
            width: "0%",
        }, {
            width,
            duration: 0.7,
            ScrollTrigger: {
                trigger: section,
                start: "top center",
                end: "bottom center",
            },
        });
    }
    growWidth(whatICanDoForYouLeftHorizontalBorder, "100%", whatICanDoForYouSection);
    growWidth(whatICanDoForRightHorizontalBorder, "100%", whatICanDoForYouSection);
});
