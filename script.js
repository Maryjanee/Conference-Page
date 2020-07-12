const closenavigation = document.querySelector(".closenav");
const menubars = document.querySelector(".menu");
const mobileMenu = document.querySelector(".nav-links-container");
menubars.addEventListener("click", () => {
  mobileMenu.style.display = "block";
});

closenavigation.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  location.reload();
});
