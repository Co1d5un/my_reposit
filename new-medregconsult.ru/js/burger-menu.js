const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burger.classList.toggle('toggle');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        burger.classList.remove('toggle');
        document.body.style.overflow = 'auto';
    });
});