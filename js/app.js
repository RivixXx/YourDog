$(document).ready(function(){
    $('.slider__left').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        fade: true,
        cssEase: 'linear',
        autoplay:true,
        adaptiveHeight: true, 
    });
    // используй маскединпут на jquery
    $("#phone").mask("+7(999) 999-9999");
});