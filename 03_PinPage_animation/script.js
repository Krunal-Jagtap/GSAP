gsap.to(".page2 h1", {
  transform: "translate(-250%)",
  scrollTrigger: {
    trigger: ".page2", // We have to select parent element
    scroller: "body",
    markers: true, // user for development then remove it
    start: "top 0%",
    end: "top -100%",
    scrub: 1,
    pin: true, // pin and then animation
  },
});
