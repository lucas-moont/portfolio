"use strict";
//import { growWidth } from "../utils/grow-width";
//TODO: LEVAR GROWHEIGHT PARA UM UTILS
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    function growWidth(element, width, section) {
        gsap.fromTo(element, {
            width: "0%",
        }, {
            width,
            duration: 0.8,
            ease: "power1",
            scrollTrigger: {
                trigger: section,
                start: "center center",
                end: "center center"
            }
        });
    }
    function growHeight(element, height, section) {
        gsap.fromTo(element, {
            height: "0%",
            ease: "bounce.out",
        }, {
            height,
            duration: 0.8,
            ease: "power1",
            scrollTrigger: {
                trigger: section,
                start: "center center",
                end: "center center",
            }
        });
    }
    const whatICanDoForYouSection = document.querySelector("#whatICanDoForYou");
    const whatICanDoForYouLeftHorizontalBorder = document.querySelector(".whatICanDoForYouLeftHorizontalBorder .whatICanDoForYouBorderInnerColor");
    const whatICanDoForRightHorizontalBorder = document.querySelector(".whatICanDoForRightHorizontalBorder .whatICanDoForYouBorderInnerColor");
    const whatIcanDoForVerticalBorder = document.querySelector(".whatICanDoForVerticalBorder .whatICanDoForYouBorderInnerColor");
    if (whatICanDoForYouLeftHorizontalBorder && whatICanDoForYouSection) {
        growWidth(whatICanDoForYouLeftHorizontalBorder, "100%", whatICanDoForYouSection);
    }
    if (whatICanDoForRightHorizontalBorder && whatICanDoForYouSection) {
        growWidth(whatICanDoForRightHorizontalBorder, "100%", whatICanDoForYouSection);
    }
    console.log(whatIcanDoForVerticalBorder);
    if (whatIcanDoForVerticalBorder && whatICanDoForYouSection) {
        growHeight(whatIcanDoForVerticalBorder, "100%", whatICanDoForYouSection);
    }
});
