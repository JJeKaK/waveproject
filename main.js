const wave = document.querySelector('.wave');
const video = wave.querySelector('video');
const section = document.querySelector('section');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 110000,
    triggerElement: wave,
    triggerHook: 0
})
    .setPin(wave)
    .addTo(controller);

let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
    // console.log(scrollpos);
})

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    // console.log(scrollpos, delay);
    video.currentTime = delay;
}, 33.3);