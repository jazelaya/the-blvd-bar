const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const currentSlide = track.querySelector('.current-slide');
const slideWidth= slides[0].getBoundingClientRect().width;

const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

const navDots = document.querySelector('.carousel__nav');
const dots = Array.from(navDots.children);
const currentDot = navDots.querySelector('.current-slide');



//slide arrangement logic
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
};

slides.forEach(setSlidePosition);



//Mechanics
 const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
 };


function updateDots(currentDot, targetDot) {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

// move left
prevButton.addEventListener('click', e => { 
    const prevSlide = currentSlide.previousElementSibling;
    const prevDot = currentDot.previousElementSibling;
    const targetDot = e.target.closest('button');
    
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, targetDot);
});



//move right
nextButton.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    const nextSlide = currentSlide.nextElementSibling;
    const nextDot = currentDot.nextElementSibling;

    //move to the next slide
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, targetDot);
})



//select slide button

navDots.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
   
});