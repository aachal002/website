Shery.mouseFollower(); 
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{videos:["./0.mp4","./2.mp4","./3.mp4"]});
gsap.to(".fleftlm",{
    scrollTrigger:{
        trigger:"#featuredimage",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1
    },
    y:"-300%",
    ease: Power1
});
Shery.imageEffect(".images", {
    style: 5,
    slideStyle: (setScroll) => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY / innerHeight); //Updating the scroll
      });
    },
  });
