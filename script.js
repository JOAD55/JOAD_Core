function toggleMenu() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.classList.toggle('open');
    navLinks.classList.toggle('active');

    // Bloquear scroll del body cuando el menú está abierto
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

function closeMenu() {
    document.querySelector('.burger').classList.remove('open');
    document.querySelector('.nav-links').classList.remove('active');
    document.body.style.overflow = '';
}

// Cerrar menú al hacer clic en cualquier link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Cerrar menú al presionar Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});

// Animación de entrada de las cards al hacer scroll (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${i * 0.1}s`;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Agregar clase visible
const style = document.createElement('style');
style.textContent = '.card.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// Contacto
function irInstagram() {
    window.open("https://www.instagram.com/joad.core", "_blank");
}

function irGithub() {
    window.open("https://github.com/JOAD55", "_blank");
}

function enviarMail() {
    const email = "joad.core@outlook.com";
    const asunto = "Consulta sobre el proyecto";
    const cuerpo = "Hola, me gustaría obtener más información...";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}