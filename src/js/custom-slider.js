function launchSlider(curSlider, curSlides){
    console.log('launchslider');
    
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

const newsSlider = doc.querySelector('.news__slider');
const newsSlides = newsSlider.querySelectorAll('.news');

launchSlider(newsSlider, newsSlides);

function pauseSlider(activeSlider) {
    activeSlider.classList.remove('playing');
    let slides = activeSlider.querySelectorAll('.slide');
    slides.forEach(slide => {
        if(!slide.classList.contains('active')) {
            slide.classList.remove('slide');
        }
    });

}

function playSlider(activeSlider) {
    console.log(activeSlider);
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
    document.addEventListener('mousemove', function(){
        showCoords(event);
        }); 
        function showCoords(event) {
           var y = event.clientY;
          var coords = "Y coords: " + y;
        let scroll = window.scrollY;
        // console.log('scroll + y' + ':', y);
        let slider = document.querySelector('.main-slider');
        let sliderRect = slider.getBoundingClientRect();
        let top = sliderRect.top + scroll;
        let bottom = Math.round(sliderRect.top + sliderRect.height);
        // console.log('top, bottom' + ':' + top, bottom);
        let inside;
        if(y >= top && y<= bottom) {
        inside == true;
        } else {
        inside = false;
        }
        if(inside) {
        pauseSlider(slider);
        }
        }