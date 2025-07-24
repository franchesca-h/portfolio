document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling para la navegación
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efecto al hacer scroll en el header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Abrir modal de contacto
    document.getElementById('openContactForm').onclick = function(e) {
        e.preventDefault();
        document.getElementById('contactModal').style.display = 'flex';
    };
    // Cerrar modal de contacto
    document.getElementById('closeContactForm').onclick = function() {
        document.getElementById('contactModal').style.display = 'none';
    };
    // Cerrar modal al hacer click fuera del contenido
    document.getElementById('contactModal').onclick = function(e) {
        if (e.target === this) this.style.display = 'none';
    };
    document.getElementById('themeToggle').onclick = function() {
  document.body.classList.toggle('dark-mode');
  // Cambia el icono
  this.innerHTML = document.body.classList.contains('dark-mode')
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
};
});