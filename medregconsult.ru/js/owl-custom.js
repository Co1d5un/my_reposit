$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 3,
        itemsDesktop: true,
        itemsDesktopSmall: true,
        itemsTablet: true,
        itemsMobile: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fafafa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fafafa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>'
        ],
        responsiveClass: true,
        responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3
        }
        }
    })
})