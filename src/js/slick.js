let doc = document;
let mainSlider = doc.querySelector('.main-slider'); 
    
    doc.addEventListener('DOMContentLoaded', function (event) {
        $(mainSlider).slick({

            dots: false,
            arrows: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            fade: false,
            cssEase: 'ease-in-out',
            adaptiveHeight: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            responsive: [
                {
                    breakpoint: 1030,
                    settings: {
                        arrows: false
        
                    }
                    
                }
            ]
        });
    });
   
    

