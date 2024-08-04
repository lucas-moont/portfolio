import gsap from 'gsap';

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const whatICanDoForYouSection: HTMLElement | null =
    document.querySelector("#whatICanDoForYou");
  const whatICanDoForYouLeftHorizontalBorder: HTMLElement | null = document.querySelector(
    ".whatICanDoForYouLeftHorizontalBorder .whatICanDoForYouBorderInnerColor"
  );
  const whatICanDoForRightHorizontalBorder: HTMLElement | null = document.querySelector(
    ".whatICanDoForRightHorizontalBorder .whatICanDoForYouBorderInnerColor"
  );

  function growWidth(element: HTMLElement, width: number | string, section: HTMLElement) {
    gsap.fromTo(
      element,
      {
        width: "0%",
      },
      {
        width,
        duration: 0.7,
        ScrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  }

  if(whatICanDoForYouLeftHorizontalBorder && whatICanDoForYouSection){
    growWidth(whatICanDoForYouLeftHorizontalBorder, "100%", whatICanDoForYouSection)
  }

  if(whatICanDoForRightHorizontalBorder && whatICanDoForYouSection){
    growWidth(whatICanDoForRightHorizontalBorder, "100%", whatICanDoForYouSection)
  }

});