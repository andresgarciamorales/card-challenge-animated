/**************** import gsap ******************** */
// in the html
/**************** load animation ******************** */

$(document).ready(function() {
    const timeline = gsap.timeline();

    timeline.from('.card__1', {
        x:-200,
        duration: 1,
        opacity:0,
        ease: "power1",
    }),
    timeline.to('.card__1', {
        scale: 1.1,
        duration: 1,
    }),
    timeline.to('.card__1', {
        scale: 1,
        duration: 1,
    })

});

$("#name_user").click(function(){
    const timeline = gsap.timeline();

    timeline.to('.card__1', {
        x:-100,
        duration: 0.5,
        opacity:0,
        display: 'none'
    });
    timeline.to('.card__2', {
        x:0,
        duration: 1.5,
        display: 'block',
    }),
    timeline.to('.card__2', {
        scale:1.1,
        duration:1
    }),
    timeline.to('.card__2', {
        scale:1,
    })
});