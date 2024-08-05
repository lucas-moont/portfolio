"use strict";
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    function spredColumns(element, left, right, parentElement) {
        gsap.to(element, {
            left,
            duration: 2,
            right,
            ease: "expo.out",
            delay: 0.5,
            scrollTrigger: {
                trigger: parentElement,
                start: 'top center',
                end: 'bottom center',
                markers: true,
            }
        });
    }
    const iKnowColumn1 = document.querySelector('.whatIKnowColumn:first-of-type');
    const iKnowColumn3 = document.querySelector('.whatIKnowColumn:nth-of-type(3)');
    const iKnowColumnsParent = document.querySelector('.whatIKnowColumns');
    console.log(iKnowColumn1, iKnowColumnsParent);
    if (iKnowColumn1 && iKnowColumnsParent) {
        spredColumns(iKnowColumn1, 0, null, iKnowColumnsParent);
    }
    if (iKnowColumn3 && iKnowColumnsParent) {
        spredColumns(iKnowColumn3, null, 0, iKnowColumnsParent);
    }
});
