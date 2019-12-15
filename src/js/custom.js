'use strict';

const doc = document;
const win = window;

// function events() {
//     let dropdown = doc.querySelectorAll('.header__nav-link');
//         dropdown.forEach(function(elem, index) {
//             elem.addEventListener('mouseover', function(e){
//                 let link = e.target;
//                 let dropItem = link.parentElement;
//                 let dropItems = doc.querySelectorAll('.dropdown');
//                     dropItems.forEach(function(item) {
//                         item.classList.remove('active');
//                     });
//                 if(dropItem.classList.contains('dropdown')) {
//                     dropItem.classList.add('active');
//                 }
               
//             });
//         });
// }

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

let sliders = doc.querySelectorAll('.slider');
    sliders.forEach(function (activeSlider) {
        activeSlider.addEventListener('mouseout', function(){
            playSlider(activeSlider);
        });
        activeSlider.addEventListener('mouseover', function(){
            pauseSlider(activeSlider);
        });
    })



    
    
