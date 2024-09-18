gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add("(min-width: 1200px) and (max-height: 900px)", function () {
  const rocketTimelineLarge = gsap.timeline({
    scrollTrigger: {
      trigger: ".navbar", // Trigger animation based on the navbar section
      start: "top top", // Animation starts when the top of .navbar hits the top of the viewport
      endTrigger: ".join-us-section", // Animation ends when .join-us-section hits the top of the viewport
      end: "top top", // End animation when the top of .join-us-section hits the top of the viewport
      scrub: true, // Smoothly animate the rocket
      markers: false,
    },
  });

  rocketTimelineLarge
    .to(".rocket", { duration: 0.05, x: -150, y: 100, rotation: 35 })
    .to(".rocket", { duration: 0.05, y: 300, rotation: -60 })
    .to(".rocket", { duration: 0.09, x: 600, y: 500, rotation: -60 })
    .to(".rocket", { duration: 0.05, y: 600, rotation: 60 })
    .to(".rocket", { duration: 0.09, x: -200, y: 950, rotation: 60 })
    .to(".rocket", { duration: 0.05, y: 1050, rotation: -55 })
    .to(".rocket", { duration: 0.09, x: 260, y: 1200, rotation: -55 })
    .to(".rocket", { duration: 0.05, x: 395, y: 1300, rotation: 0 })
    .to(".rocket", { duration: 0.05, y: 1490, rotation: 0 });
});

mm.add("(min-width: 1200px) and (min-height: 900px)", function () {
  const rocketTimelineLarge = gsap.timeline({
    scrollTrigger: {
      trigger: ".navbar", // Trigger animation based on the navbar section
      start: "top top", // Animation starts when the top of .navbar hits the top of the viewport
      endTrigger: ".join-us-section", // Animation ends when .join-us-section hits the top of the viewport
      end: "top top", // End animation when the top of .join-us-section hits the top of the viewport
      scrub: true, // Smoothly animate the rocket
      markers: false,
    },
  });

  rocketTimelineLarge
    .to(".rocket", { duration: 0.1, x: -150, y: 100, rotation: 35 })
    .to(".rocket", { duration: 0.1, y: 250, rotation: -60 })
    .to(".rocket", { duration: 0.2, x: 600, y: 450, rotation: -60 })
    .to(".rocket", { duration: 0.1, y: 600, rotation: 60 })
    .to(".rocket", { duration: 0.2, x: -130, y: 750, rotation: 60 })
    .to(".rocket", { duration: 0.1, y: 900, rotation: -55 })
    .to(".rocket", { duration: 0.2, x: 260, y: 1150, rotation: -55 })
    .to(".rocket", { duration: 0.2, x: 385, y: 1300, rotation: 0 })
    .to(".rocket", { duration: 0.2, y: 1550, rotation: 0 });
});

mm.add("(min-width: 1200px) and (min-height: 1000px)", function () {
  const rocketTimelineLarge = gsap.timeline({
    scrollTrigger: {
      trigger: ".navbar", // Trigger animation based on the navbar section
      start: "top top", // Animation starts when the top of .navbar hits the top of the viewport
      endTrigger: ".join-us-section", // Animation ends when .join-us-section hits the top of the viewport
      end: "top top", // End animation when the top of .join-us-section hits the top of the viewport
      scrub: true, // Smoothly animate the rocket
      markers: false,
    },
  });

  rocketTimelineLarge
    .to(".rocket", { duration: 0.1, x: -150, y: 100, rotation: 35 })
    .to(".rocket", { duration: 0.1, y: 250, rotation: -60 })
    .to(".rocket", { duration: 0.2, x: 600, y: 450, rotation: -60 })
    .to(".rocket", { duration: 0.1, y: 600, rotation: 60 })
    .to(".rocket", { duration: 0.2, x: -200, y: 750, rotation: 60 })
    .to(".rocket", { duration: 0.1, y: 1000, rotation: -55 })
    .to(".rocket", { duration: 0.1, x: 260, y: 1300, rotation: -55 })
    .to(".rocket", { duration: 0.2, x: 385, y: 1400, rotation: 0 })
    .to(".rocket", { duration: 0.2, y: 1635, rotation: 0 });
});

mm.add(
  "(min-width: 1100px) and (max-width: 1200px) and (min-height: 900px)",
  function () {
    const rocketTimelineLarge = gsap.timeline({
      scrollTrigger: {
        trigger: ".navbar", // Trigger animation based on the navbar section
        start: "top top", // Animation starts when the top of .navbar hits the top of the viewport
        endTrigger: ".join-us-section", // Animation ends when .join-us-section hits the top of the viewport
        end: "top top", // End animation when the top of .join-us-section hits the top of the viewport
        scrub: true, // Smoothly animate the rocket
        markers: false,
      },
    });

    rocketTimelineLarge
      .to(".rocket", { duration: 0.1, x: -100, y: 150, rotation: 35 })
      .to(".rocket", { duration: 0.1, y: 200, rotation: -60 })
      .to(".rocket", { duration: 0.2, x: 650, y: 400, rotation: -60 })
      .to(".rocket", { duration: 0.1, y: 600, rotation: 60 })
      .to(".rocket", { duration: 0.2, x: -100, y: 750, rotation: 60 })
      .to(".rocket", { duration: 0.1, y: 950, rotation: -55 })
      .to(".rocket", { duration: 0.2, x: 260, y: 1100, rotation: -55 })
      .to(".rocket", { duration: 0.2, x: 380, y: 1300, rotation: 0 })
      .to(".rocket", { duration: 0.2, y: 1700, rotation: 0 });
  }
);

mm.add("(min-width: 990px) and (max-width: 1100px)", function () {
  const rocketTimelineLarge = gsap.timeline({
    scrollTrigger: {
      trigger: ".navbar", // Trigger animation based on the navbar section
      start: "top top", // Animation starts when the top of .navbar hits the top of the viewport
      endTrigger: ".join-us-section", // Animation ends when .join-us-section hits the top of the viewport
      end: "top top", // End animation when the top of .join-us-section hits the top of the viewport
      scrub: true, // Smoothly animate the rocket
      markers: false,
    },
  });

  rocketTimelineLarge
    .to(".rocket", { duration: 0.1, x: -90, y: 100, rotation: 35 })
    .to(".rocket", { duration: 0.1, y: 250, rotation: -60 })
    .to(".rocket", { duration: 0.2, x: 650, y: 400, rotation: -60 })
    .to(".rocket", { duration: 0.1, y: 600, rotation: 60 })
    .to(".rocket", { duration: 0.2, x: -50, y: 750, rotation: 60 })
    .to(".rocket", { duration: 0.1, y: 950, rotation: -55 })
    .to(".rocket", { duration: 0.2, x: 260, y: 1100, rotation: -55 })
    .to(".rocket", { duration: 0.2, x: 375, y: 1300, rotation: 0 })
    .to(".rocket", { duration: 0.2, y: 1700, rotation: 0 });
});

// Create ScrollTrigger for reversing the animation based on screen size
ScrollTrigger.create({
  trigger: ".join-us-section",
  start: "top top",
  onEnterBack: () => {
    // Reverse rocket timeline on scrolling back up
    rocketTimeline.reverse();
  },
  onLeave: () => {
    // Reset the timeline if scrolling past the join-us-section
    rocketTimeline.play();
  },
});
