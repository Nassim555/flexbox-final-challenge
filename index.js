let nav_menu = document.querySelector(".nav");
let menu_toggle = document.querySelector(".nav-toggle");

menu_toggle.addEventListener("click", () => {
  nav_menu.classList.toggle("show");
});
