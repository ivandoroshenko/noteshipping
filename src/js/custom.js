let doc = document;

$(doc).ready(function () {
    $('.main-slider').slick({

        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        fade: false,
        cssEase: 'ease-in-out',
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        // responsive: [
        //     {
        //         breakpoint: 769,
        //         settings: {
        //             arrows: false
    
        //         }
        //     }
        // ]
    });
    
});

$('.main-slider').slick('refresh');

// // events();
// let launch = true;
// function launchSlider(start, curSlider, curSlides){
//     let slider = curSlider;
//     let slides = curSlides;
//     if(slider.classList.contains('playing')) {
    
//         let i = 0;
//         let length = slides.length;
//             setInterval(function(){ 
              
//                 if(i == slides.length) {
//                     i = 0;
//                     let last = slides[slides.length - 1];
//                     last.classList.remove('active');
//                     slider.appendChild(last);
//                 }
//                 slides[i].classList.add('active');
//                 if(slides[i - 1]) {
//                     let first = slides[i - 1];
//                     first.classList.remove('active');
//                     slider.appendChild(first);
//                 }
            
//                 i++;            
                        
//                 }, 5000);
//     } else return;
   
        
  
// }
// const mainSlider = doc.querySelector('.slider');
// const mainSlides = mainSlider.querySelectorAll('img');

// launchSlider(true, mainSlider, mainSlides);

// const newsSlider = doc.querySelector('.news__slider');
// const newsSlides = newsSlider.querySelectorAll('.news');

// launchSlider(true, newsSlider, newsSlides);

// function pauseSlider(activeSlider) {
//     if(activeSlider.classList.contains('main-slider')) {
//         console.log(activeSlider);
        
//         console.log('pause');
//     }
//     activeSlider.classList.remove('playing');
//     let slides = activeSlider.querySelectorAll('.slide');
//     slides.forEach(slide => {
//         if(!slide.classList.contains('active')) {
//             slide.classList.remove('slide');
//         }
//     });

// }

// function playSlider(activeSlider) {
//     console.log(activeSlider);
//     let slides = Array.from(activeSlider.children);
//     slides.forEach(slide => {
//             slide.classList.add('slide');
//     });
// }
// pauseSlider(newsSlider);

// document.addEventListener('mouseover', function(e){
//     let target = e.target;
//     let sliderWrap = target.closest('.slider__wrap');
//     if(sliderWrap) {
//         // console.log(sliderWrap);
//         let slider = sliderWrap.querySelector('.slider');
//         pauseSlider(slider);
//     }
//     });

// let sliders = doc.querySelectorAll('.slider');
//     sliders.forEach(function (activeSlider) {
//         activeSlider.addEventListener('mouseout', function(){
//             playSlider(activeSlider);
//         });
//         activeSlider.addEventListener('mouseover', function(){
//             // pauseSlider(activeSlider);
//         });
//     })
//     document.addEventListener('mousemove', function(){
//         showCoords(event);
//         }); 
//         function showCoords(event) {
//            var y = event.clientY;
//           var coords = "Y coords: " + y;
//         let scroll = window.scrollY;
//         // console.log('scroll + y' + ':', y);
//         let slider = document.querySelector('.main-slider');
//         let sliderRect = slider.getBoundingClientRect();
//         let top = sliderRect.top + scroll;
//         let bottom = Math.round(sliderRect.top + sliderRect.height);
//         // console.log('top, bottom' + ':' + top, bottom);
//         let inside;
//         if(y >= top && y<= bottom) {
//         inside == true;
//         } else {
//         inside = false;
//         }
//         if(inside) {
//         pauseSlider(slider);
//         }
//         }
