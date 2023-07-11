var tl = gsap.timeline()

tl.from("#nav img,#nav h3,#nav h4,#nav button", {
    y: -100,
    duration: 0.5,
    delay: 0.5,
    opacity: 0, //initially opacity is 0 and gradually it becomes 1
    stagger: 0.1, //appears one by one
})

tl.from("#main h1", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
})

tl.from(".image", {
    scale: 0, //size goes from 0 to 1
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
})

tl.from("#watch", {
    scale: 0,
    opacity: 0,
})

tl.from("#footer i", {
    scale: 0,
    duration: 0.5,
    opacity: 0,

})

tl.from("#scroll-hover", {
    scale: 0,
    opacity: 0,
})

tl.to("#scroll-hover", {
    y: 10,
    repeat: -1, //infinite times repeat
    duration: 0.4,
    yoyo: true, //goes up and down
})


