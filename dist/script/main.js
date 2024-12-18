const menuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", function() {
  mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("hidden")) {
    console.log("Mobile menu is hidden");
  } else {
    console.log("Mobile menu is visible");
  }
});
