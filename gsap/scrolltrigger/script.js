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
            scrub: 1, // this smoothens the scroll
        }
    });

    gsap.from("#p3 #Box", {
        x: 300,
        duration: 1,

        scrollTrigger: {
            trigger: "#p3 #Box",
            scroller:'body',
            markers:true,

            start: "top 40%",
            end: "top 20%",
            scrub: 0.5,
            pin: true // this pins the element and when you scroll, it moves with the scroll. 
        }
    });
});