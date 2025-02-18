let container = document.querySelector(".container");
let cursor = document.querySelector("#cursor");

container.addEventListener("mousemove", function (event) {
  gsap.to(cursor, {
    x: event.x,
    y: event.y,
    duration: 1,
    ease: "back.out",
  });
});
