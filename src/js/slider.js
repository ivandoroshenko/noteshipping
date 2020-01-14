'use strict';

const win = window;

const newsSlider = doc.querySelector('#news-slider');
const newsSlides = newsSlider.querySelectorAll('.news');
    launchSlider();

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
                    
            }, 7000);
        
  
}

