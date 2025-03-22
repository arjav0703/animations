document.addEventListener("DOMContentLoaded", () => {
    gsap.to("#Fast", {
        x: 700,
        duration: 1.2,
        yoyo: true,
        repeat:-1,
    });

    gsap.to("#Faster", {
        x: 700,
        duration: 1,
        yoyo: true,
        repeat:-1,
    });

    gsap.to("#Fastest", {
        x: 700,
        duration: 0.8,
        yoyo: true,
        repeat:-1,
    });
});