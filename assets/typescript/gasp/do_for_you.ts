import { growWidth } from './utils/grow-width';

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const whatICanDoForYouGrid: HTMLElement | null = document.querySelector(
    ".whatIcanDoForYouGrid"
  );
  const whatICanDoForYouLeftHorizontalBorder: HTMLElement | null =
    document.querySelector(
      ".whatICanDoForYouLeftHorizontalBorder .whatICanDoForYouBorderInnerColor"
    );
  const whatICanDoForRightHorizontalBorder: HTMLElement | null =
    document.querySelector(
      ".whatICanDoForRightHorizontalBorder .whatICanDoForYouBorderInnerColor"
    );

  if (whatICanDoForYouLeftHorizontalBorder && whatICanDoForYouGrid) {
    growWidth(
      whatICanDoForYouLeftHorizontalBorder,
      "100%",
      whatICanDoForYouGrid
    );
  }

  if (whatICanDoForRightHorizontalBorder && whatICanDoForYouGrid) {
    growWidth(whatICanDoForRightHorizontalBorder, "100%", whatICanDoForYouGrid);
  }
});
