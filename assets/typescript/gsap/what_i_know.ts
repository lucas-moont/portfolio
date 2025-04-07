document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger)

  function spredColumns(element: HTMLElement, left: number | string | null, right: string | number | null, parentElement: HTMLElement) {
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
      }
    })
  }

  const iKnowColumn1: HTMLElement | null = document.querySelector('.whatIKnowColumn:first-of-type')
  const iKnowColumn3: HTMLElement | null = document.querySelector('.whatIKnowColumn:nth-of-type(3)')
  const iKnowColumnsParent: HTMLElement | null = document.querySelector('.whatIKnowColumns')
  console.log(iKnowColumn1, iKnowColumnsParent)

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  
  if(!isMobile) {
    if(iKnowColumn1 && iKnowColumnsParent) {
      spredColumns(iKnowColumn1, 0, null, iKnowColumnsParent)
    }
  
    if(iKnowColumn3 && iKnowColumnsParent) {
      spredColumns(iKnowColumn3, null, 0, iKnowColumnsParent)
    }
  }
})