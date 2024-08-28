let closeEvent = document.querySelector(".menu-icon");
let links = document.querySelector(".nav-links");

closeEvent.addEventListener("click", function () {
  links.classList.toggle("active");
});

let closeuser = document.querySelector(".user-icon");
let userlinks = document.querySelector(".user-menu");

closeuser.addEventListener("click", function () {
  userlinks.classList.toggle("active");
});
