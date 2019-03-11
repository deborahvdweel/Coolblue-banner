let current = 800;
let destination = 1000;
let friction = 0.03;

/**
 * Get the elements from the overlay
 * Make overlay smaller and change opacity of other elements
 */
function loop() {
    const overlay = document.getElementsByClassName('cb-overlay');
    const cbImage = document.getElementsByClassName('cb-img');
    const cbText = document.getElementsByClassName('cb-text');

    setTimeout(function () {
        current += (destination - current) * friction;
        overlay[0].style.width = (destination - current + 'px');
        overlay[0].style.border = (destination - current + 'px');
        overlay[0].style.padding = (0 + 'px');
        cbImage[0].style.opacity = 0;
        cbText[0].style.opacity = 0;

        if (current >= destination - 0.1) {
            clearInterval(animation);
        }
    }, 1800);
}

let timer;
let turn = 0;

/**
 * Use a timer for the image to spin.
 * Increments of 5
 */
function turnFan() {
    const imgSpin = document.getElementsByClassName("img-spin");
    turn += 5;
    imgSpin[0].style.transform = "rotate(" + (turn % 360) + "deg)";
}

/**
 *
 * Call functions
 */
const animation = setInterval(loop, 5);
timer = setInterval(turnFan, 30);

/**
 * I found out about the .animate function a while ago. Just wanted to experiment a little with it.
 * Only supported by firefox & chrome
 * Included a polyfill only to make it work in safari for now
 */
const priceLabel = document.querySelector('.price-sticker');
const promoLabel = document.querySelector('.promo-label');

const leftKeyframes = [
    {left: '-200px'}, {left: '28px'}
];

const rightKeyframes = [
    {right: '-200px'}, {right: '20px'}
];

const labelScaleTiming = {
    duration: 1500, direction: 'alternate', easing: 'ease-in-out', delay: 1800
};

/**
 * Use the variables above to move the label from right to left
 */
priceLabel.animate(rightKeyframes, labelScaleTiming);

/**
 * Use the variable above to move the label from left to right
 */
promoLabel.animate(leftKeyframes, labelScaleTiming);

const image = document.querySelector('.img-product');
const imageSpin = document.querySelector('.img-spin');

const imageScaleKeyframes = [
    {transform: 'scale(0)'}, {transform: 'scale(1)'}
];

const imageScaleTiming = {
    duration: 1000, direction: 'normal', easing: "cubic-bezier(.17,.89,.21,1.41)", delay: 1800 };

/**
 * Use the variables above to create an animation on the images
 * This way we only have to define the variables once
 */
image.animate(imageScaleKeyframes, imageScaleTiming);
imageSpin.animate(imageScaleKeyframes, imageScaleTiming);
