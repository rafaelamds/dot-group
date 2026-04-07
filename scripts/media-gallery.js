export function initMediaGallery(container) {
    if (typeof Swiper !== 'undefined') {
        new Swiper(container, {
            spaceBetween: 30,
            effect: "fade",
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } else {
        console.warn('Swiper não encontrado.');
    }
}