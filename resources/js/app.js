window.$ = require('jquery')
require('slick-carousel')


$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        lazyLoad: 'ondemand',
        // prevArrow: $('.reviews-slider-wrapper .slider-prev'),
        // nextArrow: $('.reviews-slider-wrapper .slider-next')
    })

    $('#sidebar-btn').on('click', function() {
        $('#sidebar').toggleClass('visible');
    });
});

