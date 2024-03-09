// Preloader
const preloader = document.querySelector("body > .preloader");
window.addEventListener("load", () => preloader.classList.add("loaded"));

// Navigation Bar
const navLinks = document.querySelector(".header .navbar > .links");
const navLinksLis = document.querySelectorAll(".header .navbar > .links li");
const menuBarIcon = document.querySelector(".header .navbar > .menu-icon");

menuBarIcon.addEventListener("click", toggleMenuBar);
navLinksLis.forEach((li) => {
  li.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBarIcon.classList.remove("active");
  });
});

function toggleMenuBar() {
  menuBarIcon.classList.contains("active") ? menuBarIcon.classList.remove("active") : menuBarIcon.classList.add("active");
  navLinks.classList.contains("active") ? navLinks.classList.remove("active") : navLinks.classList.add("active");
}

// Scroll To Top
const scrollToTop = document.querySelector("body > .scroll-top");

window.addEventListener("scroll", () => {
  scrollY >= 1300 ? scrollToTop.classList.add("show") : scrollToTop.classList.remove("show");
});

scrollToTop.addEventListener("click", goUp);

function goUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}