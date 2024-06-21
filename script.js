const bg_image = document.querySelector(".bg-image");

window.addEventListener("scroll", () => {
  updateimge();
});

function updateimge() {
  bg_image.style.opacity = 1 - window.pageYOffset / 900;
  bg_image.style.backgroundSize = 160 - window.pageYOffset / 8 + "%";
}
