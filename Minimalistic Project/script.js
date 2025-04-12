let tl = gsap.timeline();

tl.from("nav h1, nav li, nav button", {
  y: -40,
  opacity: 0,
  delay: 0.8,
  duration: 1,
  stagger: 0.3,
});

tl.from(".Hero-left h2, .Hero-left p", {
  x: -100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.3,
});

tl.from(".Hero-left button, .Hero-right img", {
  opacity: 0,
  duration: 1,
});

tl.from(".Brands-Images img", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
