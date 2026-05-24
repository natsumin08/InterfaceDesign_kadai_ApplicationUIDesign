document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('header');
    const siteMenu = document.querySelector('.site-menu');
    const revealItems = document.querySelectorAll('.reveal');

    const updateScrollEffects = () => {
        revealItems.forEach((item) => {
            const rect = item.getBoundingClientRect();

            if (
                rect.top < window.innerHeight * 0.8 &&
                rect.bottom > window.innerHeight * 0.2
            ) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    };

    updateScrollEffects();
    window.addEventListener('scroll', updateScrollEffects);

    if (menuToggle && header && siteMenu) {
        menuToggle.addEventListener('click', (event) => {
            event.preventDefault();
            header.classList.toggle('menu-open');
        });

        document.addEventListener('click', (event) => {
            if (!header.contains(event.target) && header.classList.contains('menu-open')) {
                header.classList.remove('menu-open');
            }
        });

        siteMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                header.classList.remove('menu-open');
            });
        });
    }
});