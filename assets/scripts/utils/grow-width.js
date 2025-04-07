export function growWidth(element, width, section) {
    gsap.fromTo(element, {
        width: "0%",
    }, {
        width,
        duration: 0.7,
        scrollTrigger: {
            trigger: section,
            start: "center center",
            end: "center center",
        }
    });
}
