//dates for website
let today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();
document.querySelector("#lastmodified").textContent = document.lastModified;

// hamburger menu
const hidebutton = document.querySelector(".menu-hide");
const showbutton = document.querySelector(".menu-show");
const navmenu = document.querySelector("#nav-menu");

hidebutton.addEventListener("click", () => {
  hidebutton.classList.toggle("showing");
  showbutton.classList.toggle("showing");
  navmenu.classList.toggle("showing");
});

showbutton.addEventListener("click", () => {
  hidebutton.classList.toggle("showing");
  showbutton.classList.toggle("showing");
  navmenu.classList.toggle("showing");
});

// Smoothie count

// Check if the current page is the specific page
if (window.location.href.includes("confirmation.html")) {
  let pageLoadCount = localStorage.getItem("smoothieCount") || 0;
  pageLoadCount++;

  // Update the local storage with the new number
  localStorage.setItem("smoothieCount", pageLoadCount);
}

const storedSmoothies = localStorage.getItem("smoothieCount");
const smoothieId = document.getElementById("smoothies-made");

if (storedSmoothies) {
  smoothieId.textContent = storedSmoothies;
} else {
  smoothieId.textContent = 0;
}
