const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header-links');
    const headerLinks = document.querySelectorAll('.header-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        headerLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');

    });
}

navSlide();
