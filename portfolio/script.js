// script.js

// Smooth scrolling pour les liens de la barre de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation à l'apparition des éléments (simple exemple)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // L'élément devient visible quand 10% est affiché
});

// Ciblez tous les éléments que vous voulez animer
document.querySelectorAll('.card, #a-propos .row').forEach(el => {
    observer.observe(el);
});