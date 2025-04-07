document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  function appearsFromLeftWithOpacityChange(element: HTMLElement){
    gsap.fromTo(
      element,
      {
        x: `-64px`,
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "top center",
        },
      }
    );
  }

  function appearsFromRightWithOpacityChange(element: HTMLElement){
    gsap.fromTo(
      element,
      {
        x: `64px`,
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "top center",
        },
      }
    );
  }

  const appearFromLeftWithOpacity = document.querySelector(".appearFromLeftWithOpacity");
  const appearFromRightWithOpacity = document.querySelector(".appearFromRightWithOpacity");
  
  appearsFromLeftWithOpacityChange(appearFromLeftWithOpacity as HTMLElement);
  appearsFromRightWithOpacityChange(appearFromRightWithOpacity as HTMLElement);
})