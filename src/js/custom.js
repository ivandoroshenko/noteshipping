'use strict';

const doc = document;
const win = window;


// events();
let launch = true;
function launchSlider(start, curSlider, curSlides){
    let slider = curSlider;
    let slides = curSlides;

    let i = 0;
    let length = slides.length;
        setInterval(function(){ 
          
            if(i == slides.length) {
                i = 0;
                let last = slides[slides.length - 1];
                last.classList.remove('active');
                slider.appendChild(last);
            }
            slides[i].classList.add('active');
            if(slides[i - 1]) {
                let first = slides[i - 1];
                first.classList.remove('active');
                slider.appendChild(first);
            }
        
            i++;            
                    
            }, 5000);
        
  
}
const mainSlider = doc.querySelector('.slider');
const mainSlides = mainSlider.querySelectorAll('img');

launchSlider(true, mainSlider, mainSlides);

const newsSlider = doc.querySelector('.news__slider');
const newsSlides = newsSlider.querySelectorAll('.news');

launchSlider(true, newsSlider, newsSlides);

function pauseSlider(activeSlider) {

    let slides = activeSlider.querySelectorAll('.slide');
    slides.forEach(slide => {
        if(!slide.classList.contains('active')) {
            slide.classList.remove('slide');
        }
    });

}

function playSlider(activeSlider) {
    let slides = Array.from(activeSlider.children);
    slides.forEach(slide => {
            slide.classList.add('slide');
    });
}
pauseSlider(newsSlider);

document.addEventListener('mouseover', function(e){
    let target = e.target;
    let sliderWrap = target.closest('.slider__wrap');
    if(sliderWrap) {
        console.log(sliderWrap);
        let slider = sliderWrap.querySelector('.slider');
        pauseSlider(slider);
    }
    });

let sliders = doc.querySelectorAll('.slider');
    sliders.forEach(function (activeSlider) {
        activeSlider.addEventListener('mouseout', function(){
            playSlider(activeSlider);
        });
        activeSlider.addEventListener('mouseover', function(){
            pauseSlider(activeSlider);
        });
    })


