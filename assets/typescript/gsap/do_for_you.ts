//import { growWidth } from "./utils/grow-width";
//TODO: LEVAR GROWHEIGHT PARA UM UTILS


document.addEventListener("DOMContentLoaded", () => {
  function growWidth(element: HTMLElement, width: number | string, section: HTMLElement) {
    gsap.fromTo(
      element,
      {
        width: "0%",
        ease: "linear",
      },
      {
        width,
        duration: 0.7,
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: "center center",
          markers: true,
        }
      }
    );
  }

  const whatICanDoForYouSection: HTMLElement | null =
    document.querySelector("#whatICanDoForYou");
  const whatICanDoForYouLeftHorizontalBorder: HTMLElement | null = document.querySelector(
    ".whatICanDoForYouLeftHorizontalBorder .whatICanDoForYouBorderInnerColor"
  );
  const whatICanDoForRightHorizontalBorder: HTMLElement | null = document.querySelector(
    ".whatICanDoForRightHorizontalBorder .whatICanDoForYouBorderInnerColor"
  );

  if (whatICanDoForYouLeftHorizontalBorder && whatICanDoForYouSection) {
    growWidth(whatICanDoForYouLeftHorizontalBorder, "100%", whatICanDoForYouSection);
  }

  if (whatICanDoForRightHorizontalBorder && whatICanDoForYouSection) {
    growWidth(whatICanDoForRightHorizontalBorder, "100%", whatICanDoForYouSection);
  }
})