//import { growWidth } from "../utils/grow-width";
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

  function growHeight(element: HTMLElement, height: number | string, section: HTMLElement) {
    gsap.fromTo(
      element,
      {
        height: "0%",
        ease: "linear",
      },
      {
        height,
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
  const whatIcanDoForVerticalBorder: HTMLElement | null = document.querySelector(
    ".whatICanDoForVerticalBorder .whatICanDoForYouBorderInnerColor"
  )

  if (whatICanDoForYouLeftHorizontalBorder && whatICanDoForYouSection) {
    growWidth(whatICanDoForYouLeftHorizontalBorder, "100%", whatICanDoForYouSection);
  }

  if (whatICanDoForRightHorizontalBorder && whatICanDoForYouSection) {
    growWidth(whatICanDoForRightHorizontalBorder, "100%", whatICanDoForYouSection);
  }

  console.log(whatIcanDoForVerticalBorder)

  if(whatIcanDoForVerticalBorder && whatICanDoForYouSection) {
    growHeight(whatIcanDoForVerticalBorder, "100%", whatICanDoForYouSection)
  }
})