var tl = gsap.timeline();

tl.to("#full", {
  right: "0",
  duration: 0.8,
});

tl.from("#full p", {
  x: 250,
  duration: 0.8,
  stagger: 0.3,
  opacity: 0,
});

tl.from("#full i", {
  opacity: 0,
});

tl.pause();

const navMenuOpen = document.querySelector("#nav i");
const navMenuClose = document.querySelector("#full i");

navMenuOpen.addEventListener("click", function () {
  tl.play();
});

navMenuClose.addEventListener("click", function () {
  tl.reverse();
});
