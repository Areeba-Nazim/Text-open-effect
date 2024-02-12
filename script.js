const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

let tl = gsap.timeline({scrollTrigger : {
    trigger : "#main" ,
    markers : true ,
    start : "60% 60%" ,
    end : "60% 100%" ,
    pin : true , 
    scrub : 3
}})
tl.to(".top" , {
    duration : 1 ,
    ease: Power3 ,
    delay : 1 ,
    y : "-100%"
},"a")
tl.to(".bottom" , {
    duration : 1 ,
    ease: Power3 ,
    delay : 1 ,
    y : "100%"
},"a")
tl.to(".top-h" , {
    duration : 1 ,
    ease: Power3 ,
    delay : 1 ,
    y : "32%"
},"a")
tl.to(".bottom-h" , {
    duration : 1 ,
    ease: Power3 ,
    delay : 1 ,
    y : "-34%"
},"a")