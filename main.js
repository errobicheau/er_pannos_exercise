/* Please make the "Choose Your Best Fit" button an accordion, so when you click on it, the blue section expands and shows the text "This is the accordion section"

Please program to the best of your ability. Email mlarrabee@pannosmarketing.com if you have any questions. Thanks!
*/

document.getElementById("btn-accordion").addEventListener("click", accordionAction)
const accordionContent = document.getElementById("accordionContent")
  
function accordionAction () {
    if (accordionContent.style.display === "none" || accordionContent.style.display === "") {
      accordionContent.style.display = "flex";
      setTimeout(function() {
        accordionContent.style.opacity = "1";
      }, 0); 
    } else {
      accordionContent.style.opacity = "0";
      setTimeout(function() {
        accordionContent.style.display = "none";
      }, 300);
    }
}


document.addEventListener("DOMContentLoaded", function() {
  // Get all elements to be animated
  const popInElements = document.querySelectorAll('.fade-in');
  const delayFactor = 0.15;

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll events
  function handleScroll() {
    popInElements.forEach((element, index) => {
      if (isInViewport(element)) {
        const delay = index * delayFactor;
        element.classList.add('fade-in-visible');
        void element.offsetWidth; // Trigger reflow to ensure animation restarts;
        element.style.animationDelay = `${delay}s`;
      }
    });
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Initial check on page load
  handleScroll();
});

/*
attach an event listener to button

declare accordion content variable (this is the section containing the content)

declare function that happens on button click

check if accordionContent is visible or not (display === 'none' || display === '')

if it's hidden or not displayed, we want to display it on click so run the following code

if it is visible, we want to hide it on click
*/