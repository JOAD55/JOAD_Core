function toggleMenu() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.classList.toggle('open');
    navLinks.classList.toggle('active');
}

// Cerrar el menú al hacer clic en cualquier link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.burger').classList.remove('open');
        document.querySelector('.nav-links').classList.remove('active');
    });
});

function irInstagram() {
    window.location.href = "https://www.instagram.com/_joshad_?igsh=MW1oZmhzenM4NGhuMA==";
}

function irGithub() {
    window.location.href = "https://github.com/JOAD55";
}