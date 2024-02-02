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
