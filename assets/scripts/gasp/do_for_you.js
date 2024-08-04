import { growWidth } from './utils/grow-width.js';
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    const whatICanDoForYouGrid = document.querySelector(".whatIcanDoForYouGrid");
    const whatICanDoForYouLeftHorizontalBorder = document.querySelector(".whatICanDoForYouLeftHorizontalBorder .whatICanDoForYouBorderInnerColor");
    const whatICanDoForRightHorizontalBorder = document.querySelector(".whatICanDoForRightHorizontalBorder .whatICanDoForYouBorderInnerColor");
    if (whatICanDoForYouLeftHorizontalBorder && whatICanDoForYouGrid) {
        growWidth(whatICanDoForYouLeftHorizontalBorder, "100%", whatICanDoForYouGrid);
    }
    if (whatICanDoForRightHorizontalBorder && whatICanDoForYouGrid) {
        growWidth(whatICanDoForRightHorizontalBorder, "100%", whatICanDoForYouGrid);
    }
});
