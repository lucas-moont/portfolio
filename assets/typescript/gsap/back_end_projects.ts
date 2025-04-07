document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  function appearsFromLeft(element: HTMLElement){
    gsap.fromTo(
      element,
      {
        x: `-100vw`,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 0.8,
        ease: "power1",
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "top center",
        },
      }
    );
  }

  const backEndProjects = document.querySelectorAll(".backEndProjects");

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if(backEndProjects.length > 0 && !isMobile) {
    backEndProjects.forEach(backEndProject => {
      appearsFromLeft(backEndProject as HTMLElement);
    });
  }
})