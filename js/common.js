
$('.slider_w ul').slick({
    // infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrow: true,
    prevArrow: '.slider_w .btns a.prev',
    nextArrow: '.slider_w .btns a.next',
     
});

$('.slider_w ul').slick('goTo', 1);  