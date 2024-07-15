var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  // console.log("hey");
  // console.log(dets.y);
  // console.log(dets.x);
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 350 + "px";
  blur.style.top = dets.y - 350 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = " trnasparent";
    // crsr.style.Color = "trnasparent";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 1,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: "1",
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: "true",
    start: "top -25%",
    end: "tozp -70%",
    scrub: "2",
  },
});

gsap.from("#about-us img, #about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 60% ",
    end: "top 50%",
    scrub: 2,
  },
});

gsap.from(".card", {
  scale: 0.8,
  y: 50,
  stagger: 0,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 70% ",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#col1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#col1 ",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    scrub: 4,
    end: "top 45%",
  },
});

gsap.from("#col2", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#col1 ",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    scrub: 4,
    end: "top 45%",
  },
});
