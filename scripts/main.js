import { initVideo } from './video.js';
import { initMediaGallery } from './media-gallery.js';
import { initInteractiveCards } from './cards-interatives.js';
import { initMediaPlay } from './media-play.js';
import { initDiscursiveActivity } from './discursive-activity.js';
import { initObjectiveActivity } from './objective-activity.js';
import { initAccordions } from './accordions.js';

document.addEventListener('DOMContentLoaded', () => {
    
    const observerOptions = {
        root: null,
        rootMargin: '100px',
        threshold: 0.1
    };

    const componentObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                if (element.classList.contains('video') && element.querySelector('#meu-video')) {
                    initVideo(element.querySelector('#meu-video'));
                } 
                else if (element.classList.contains('media-gallery')) {
                    initMediaGallery(element.querySelector('.swiper-media-gallery'));
                } 
                else if (element.classList.contains('rotanting-cards')) {
                    initInteractiveCards(element);
                } 
                else if (element.classList.contains('media-play')) {
                    initMediaPlay(element);
                } 
                else if (element.classList.contains('discursive-objective')) {
                    initObjectiveActivity(element);
                } 
                else if (element.classList.contains('discursive-activity')) {
                    initDiscursiveActivity(element);
                } 
                else if (element.classList.contains('frequently-asked-questions')) {
                    initAccordions(element);
                }

                observer.unobserve(element);
            }
        });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll(`
        .video, 
        .media-gallery, 
        .rotanting-cards, 
        .media-play, 
        .discursive-activity, 
        .frequently-asked-questions
    `);

    elementsToObserve.forEach(el => componentObserver.observe(el));
});