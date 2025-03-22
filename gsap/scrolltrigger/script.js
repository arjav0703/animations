document.addEventListener("DOMContentLoaded", () => {
    gsap.to("#p1 #Box", {
        rotate:60,
        duration: 1,

    });

    gsap.from("#p2 #Box", {
        rotate: 360,
        scale: 0,
        duration: 1,

        scrollTrigger: {
            trigger: "#p2 #Box",
            scroller:'body',
            markers:true,

            start: "top 90%",
            end: "top 50%",
            scrub: 2,
        }
    });
});