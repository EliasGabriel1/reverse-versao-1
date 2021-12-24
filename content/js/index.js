$(document).on('ready', function () {
    $('.lazy').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });
});