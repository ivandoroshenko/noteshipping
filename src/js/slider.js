'use strict';

const win = window;

const newsSlider = doc.querySelector('#news-slider');
const newsSlides = newsSlider.querySelectorAll('.news');
if(window.innerWidth >= 1025) {
    launchSlider();
}

function launchSlider(){
    let slider = newsSlider;
    let slides = newsSlides;

    let i = 0;
    let playInterval = setInterval(function(){ 
        if(slider.getAttribute('data-slider') == 'false') {
                clearInterval(playInterval);
                
            } else {
          
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
        }        
                    
            }, 5000);
        
  
}

document.addEventListener('mouseover', function(e){
    let target = e.target;
    // let sliderWrap = target.closest('.slider__wrap');
    let slider = target.closest('#news-slider');
    if(!slider) {
        playSlider();
        function playSlider() {
            if(newsSlider.getAttribute('data-slider') != true && window.innerWidth >= 1025) {
                newsSlider.setAttribute('data-slider', true);
                launchSlider();
            }    
        }
        
    } else {
        pauseSlider();
        function pauseSlider() {
            if(newsSlider.getAttribute('data-slider') != false) {
                newsSlider.setAttribute('data-slider', false);
            }
            
        }
        
    }
    
    });

