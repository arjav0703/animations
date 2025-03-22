document.addEventListener("DOMContentLoaded", () => {
    gsap.to("#p1 #Box", {
        rotate:60,
        duration: 1,

    });

    gsap.to("#p2 #Box", {
        rotate:60,
        duration: 1,

        scrollTrigger: {
            trigger: "#p2 #Box",
            start: "top center",
            end: "bottom center",
        }
    });
});