document.addEventListener("DOMContentLoaded", () => {
    gsap.from("#Rec", {
        x: 700,
        duration: 2,
        repeat: Infinity,
        yoyo: true,
        ease: 'bounce',
    });
    gsap.to("#Box", {
        y: 500,
        delay:1,
        duration: 2,
        ease: 'bounce',
        backgroundColor: 'red',
        borderRadius: '50%',
        scale: 0.5,
        rotation: 360,
    });
});