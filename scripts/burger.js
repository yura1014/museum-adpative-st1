const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const leftContent = document.querySelector(".welcome-legend");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  leftContent.classList.toggle("text-hide");
}
