console.clear();

function animateDrumstick(nth) {
  const even = nth % 2 == 0;
  gsap.fromTo(`.drumstick:nth-of-type(${nth})`, {
    rotate: even?"30deg":"0deg",
    transformOrigin: even?"top right":"top left"
  }, {
    rotate: even?"0deg":"-30deg",
    yoyo: true,
    repeat: -1,
    duration: 0.15,
  });
}

function animateElectron(nth) {
  const even = nth % 2 == 0;
  gsap.fromTo(`.electron:nth-of-type(${nth})`, {
    rotate: "0deg",
    transformOrigin: "center",
  }, {
    rotate: even?"-18deg":"18deg",
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    duration: 0.5
  });
}

function animateNucleus() {
  gsap.fromTo(".nucleus", {
    translateX: -2
  }, {
    translateX: 1,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
  });
}

function animateFlag() {
  gsap.to(".flagpart", {
    skewX: "2deg",
    skewY: "20deg",
    scaleY: 0.7,
    repeat: -1,
    yoyo: true
  });
}

function animateAudio() {
  gsap.to(`.lucide-audio-lines path`, {
    scaleY: 0.8,
    transformOrigin: "center",
    stagger: 0.05,
    duration: 0.2,
    repeat: -1,
    yoyo: true
  });
}

function animateSteam() {
  gsap.to(`.steam`, {
    scaleY: 0.8,
    transformOrigin: "center",
    yoyo: true,
    repeat: -1,
    stagger: 0.1
  });
}

function animateSpoon() {
  gsap.to(".spoon", {
    translateX: -4,
    repeat: -1,
    ease: "power1.inOut",
    yoyo: true
  });
}

animateDrumstick(1);
animateDrumstick(2);
animateElectron(1);
animateElectron(2);
animateNucleus();
animateFlag();
animateAudio();
animateSteam();
animateSpoon();