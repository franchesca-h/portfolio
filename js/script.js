// Cargar tema inmediatamente para evitar flash
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
        if (!savedTheme) {
            localStorage.setItem('theme', 'dark');
        }
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling para la navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
            e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Efecto al hacer scroll en el header
    const header = document.querySelector('.header-module');
    if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    }

    // Abrir modal de contacto (solo si existe)
    const openContactForm = document.getElementById('openContactForm');
    const closeContactForm = document.getElementById('closeContactForm');
    const contactModal = document.getElementById('contactModal');
    
    if (openContactForm && contactModal) {
        openContactForm.onclick = function(e) {
        e.preventDefault();
            contactModal.style.display = 'flex';
        };
    }
    
    if (closeContactForm && contactModal) {
        closeContactForm.onclick = function() {
            contactModal.style.display = 'none';
        };
    }
    
    if (contactModal) {
        contactModal.onclick = function(e) {
        if (e.target === this) this.style.display = 'none';
    };
    }
    
    // Tema claro/oscuro
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
    
        if (themeToggle && themeIcon) {
        // Cargar preferencia guardada y actualizar icono
        const savedTheme = localStorage.getItem('theme') || 'dark';
        
        if (savedTheme === 'light') {
            document.body.classList.remove('dark-mode');
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                } else {
            document.body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }

        // Manejar el click en el botón
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isDarkMode = document.body.classList.contains('dark-mode');
            
            if (isDarkMode) {
                // Cambiar a modo claro
                document.body.classList.remove('dark-mode');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'light');
            } else {
                // Cambiar a modo oscuro
                document.body.classList.add('dark-mode');
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
    // Carrusel de proyectos automático
    const carouselContainer = document.querySelector('.projects-carousel-container');
    
    if (carouselContainer) {
        const carouselSlides = carouselContainer.querySelectorAll('.carousel-slide');
        const prevBtn = carouselContainer.querySelector('.carousel-btn.prev');
        const nextBtn = carouselContainer.querySelector('.carousel-btn.next');
        const indicators = carouselContainer.querySelectorAll('.indicator');
        
        if (carouselSlides.length > 0) {
            let currentIndex = 0;
            let autoSlideInterval = null;

            // Función para actualizar el carrusel
            function updateCarousel(index) {
                // Asegurar que el índice esté en rango
                if (index < 0) index = carouselSlides.length - 1;
                if (index >= carouselSlides.length) index = 0;
                
                // Remover clase active de todas las slides
                carouselSlides.forEach((slide, i) => {
                    slide.classList.remove('active');
                    if (i === index) {
                        slide.classList.add('active');
                    }
                });

                // Actualizar indicadores
                indicators.forEach((indicator, i) => {
                    indicator.classList.toggle('active', i === index);
                });
                
                currentIndex = index;
            }

            // Función para ir a la siguiente slide
            function nextSlide() {
                const nextIndex = (currentIndex + 1) % carouselSlides.length;
                updateCarousel(nextIndex);
            }

            // Función para ir a la slide anterior
            function prevSlide() {
                const prevIndex = (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
                updateCarousel(prevIndex);
            }

            // Función para iniciar el cambio automático
            function startAutoSlide() {
                if (autoSlideInterval) {
                    clearInterval(autoSlideInterval);
                }
                autoSlideInterval = setInterval(() => {
                    nextSlide();
                }, 5000); // Cambia cada 5 segundos
            }

            // Función para reiniciar el cambio automático
            function resetAutoSlide() {
                startAutoSlide();
            }

            // Event listeners para los botones
            if (nextBtn) {
                nextBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    nextSlide();
                    resetAutoSlide();
                });
            }

            if (prevBtn) {
                prevBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    prevSlide();
                    resetAutoSlide();
                });
            }

            // Event listeners para los indicadores
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    updateCarousel(index);
                    resetAutoSlide();
                });
            });

            // Iniciar el carrusel automático
            startAutoSlide();

            // Pausar cuando el usuario hace hover sobre el carrusel
            carouselContainer.addEventListener('mouseenter', () => {
                if (autoSlideInterval) {
                    clearInterval(autoSlideInterval);
                    autoSlideInterval = null;
                }
            });

            carouselContainer.addEventListener('mouseleave', () => {
                startAutoSlide();
            });

            // Inicializar con la primera slide activa
            updateCarousel(0);
        }
    }

    // Efecto 3D para el logo - código exacto
    const logo = document.getElementById('logo3d');
    if (logo) {
        logo.addEventListener('mousemove', (e) => {
            const rect = logo.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = -(y - centerY) / 12;
            const rotateY = (x - centerX) / 12;

            logo.style.transform = `
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.05)
            `;
        });

        logo.addEventListener('mouseleave', () => {
            logo.style.transform = `
                rotateX(0deg)
                rotateY(0deg)
                scale(1)
            `;
        });
    }
});