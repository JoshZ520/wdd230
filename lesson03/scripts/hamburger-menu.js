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

const darkmode = document.querySelector("body");

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
