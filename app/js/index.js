new Swiper ('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination'
    }
});
new Swiper ('.dynamic-slider-swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination'
    }
});


var buttons = $(".educational-trends .tag");
var pages = $(".educational-trends .educational-item-list");

buttons.on("click", function () {
    var index = $(this).index();
    buttons.removeClass("active");
    $(this).addClass("active");
    pages.removeClass("show").eq(index).addClass("show");
})