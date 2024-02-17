// Get the SVG icon element
const svgIcon = document.querySelector(".collapsible");

// Get the collapsible div element
const collapsibleDiv = document.querySelector(".collapsible");

// Add a click event listener to the SVG icon
svgIcon.addEventListener("click", function () {
  // Toggle the "collapsible--expanded" class on the collapsible div
  collapsibleDiv.classList.toggle("collapsible--expanded");
});
