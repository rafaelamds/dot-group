export function initAccordions(container) {
    const faqItems = container.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const summary = item.querySelector('.faq-question');
        if(!summary) return;

        summary.addEventListener('click', (event) => {
            event.preventDefault();

            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('is-open')) {
                    otherItem.classList.remove('is-open');

                    setTimeout(() => {
                        otherItem.removeAttribute('open');
                    }, 300);
                }
            });

            if (item.classList.contains('is-open')) {
                item.classList.remove('is-open');

                setTimeout(() => {
                    item.removeAttribute('open');
                }, 300);

            } else {
                item.setAttribute('open', 'true');

                setTimeout(() => {
                    item.classList.add('is-open');

                    setTimeout(() => {
                        item.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 150);

                }, 10);
            }
        });
    });
}