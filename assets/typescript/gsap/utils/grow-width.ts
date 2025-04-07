export function growWidth(element: HTMLElement, width: number | string, section: HTMLElement) {
    gsap.fromTo(
      element,
      {
        width: "0%",
      },
      {
        width,
        duration: 0.7,
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: "center center",
        }
      }
    );
  }