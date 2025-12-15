// ===== SISTEMA DE TRADUCCIÓN =====
const translations = {
    es: {
        // Navegación
        'nav.about': 'Sobre Mí',
        'nav.projects': 'Proyectos',
        'nav.skills': 'Habilidades',
        'nav.contact': 'Contacto',
        
        // Header
        'header.role': 'Desarrolladora Full-Stack & Automatización',
        
        // Sobre Mí
        'about.title': 'Sobre Mí',
        'about.intro': 'Soy <strong>Franchesca Hernández</strong>, Desarrolladora Full-Stack y Especialista en Automatización.',
        'about.description': 'Busco aportar valor en equipos que apuestan por la innovación y la mejora continua. Mis fortalezas incluyen:',
        'about.feature1.title': 'Desarrollo Web Full-Stack',
        'about.feature1.desc': 'Creación de APIs y lógica de negocio con PHP/Laravel, y desarrollo de frontend con JavaScript y tecnologías CSS modernas.',
        'about.feature2.title': 'Automatización de Procesos',
        'about.feature2.desc': 'Amplia experiencia en el ecosistema Microsoft Power Platform (Power Apps, Power Automate, Power BI, Dataverse).',
        'about.feature3.title': 'Habilidades Técnicas Adicionales',
        'about.feature3.desc': 'Conocimientos sólidos en Go, C++, Docker y bases de datos relacionales.',
        'about.feature4.title': 'Formación Técnica',
        'about.feature4.desc': 'Certificado de Profesionalidad de Nivel 3 en Programación de Sistemas Informáticos.',
        
        // Proyectos
        'projects.title': 'Proyectos Destacados',
        'projects.prev': 'Proyecto anterior',
        'projects.next': 'Proyecto siguiente',
        'projects.dressdolly.title': 'Dress Dolly App',
        'projects.dressdolly.desc': 'App móvil multiplataforma desarrollada con Flutter para diseñar y vestir muñecas. Incluye herramientas de dibujo avanzadas, sistema de capas, múltiples usuarios y logros desbloqueables.',
        'projects.tooltips.title': 'Ejemplos de Tooltips',
        'projects.tooltips.desc': 'Implementaciones prácticas de tooltips usando Bootstrap 5. Incluye formularios, botones, tablas y contenido HTML con tooltips personalizables.',
        'projects.reclamaciones.title': 'Hoja de Reclamaciones',
        'projects.reclamaciones.desc': 'Sistema para gestionar hojas de reclamaciones. Permite registrar, gestionar y hacer seguimiento de reclamaciones de manera eficiente.',
        'projects.googlemeet.title': 'Google Meet',
        'projects.googlemeet.desc': 'Integración automática de reuniones Google Meet en Laravel. Incluye ejemplos de código, configuración y galería visual de la implementación.',
        'projects.protectora.title': 'Protectora de Animales',
        'projects.protectora.desc': 'App integral para la gestión de una protectora de animales. Permite registrar mascotas, gestionar adopciones, controlar el historial veterinario y automatizar recordatorios de vacunas y revisiones.',
        'projects.supermercado.title': 'Gestión de Supermercado',
        'projects.supermercado.desc': 'Solución para la gestión de inventario, ventas y pedidos en supermercados. Incluye paneles de control, reportes automáticos y pedidos inteligentes a proveedores.',
        'projects.metro.title': 'Incidencias Metro',
        'projects.metro.desc': 'Aplicación para registrar y gestionar incidencias en la red de metro. Los empleados pueden reportar problemas en tiempo real, asignar responsables y seguir el estado de resolución.',
        'projects.all.title': 'Todos los Proyectos',
        
        // Habilidades
        'skills.title': 'Habilidades y Experiencia',
        
        // Contacto
        'contact.title': 'Contacto',
        'contact.intro': '¿Tienes un proyecto en mente? Me encantaría escucharte y trabajar contigo.',
        'contact.name': 'Nombre',
        'contact.name.placeholder': 'Tu nombre',
        'contact.email': 'Correo',
        'contact.email.placeholder': 'Tu correo',
        'contact.message': 'Mensaje',
        'contact.message.placeholder': 'Tu mensaje',
        'contact.submit': 'Enviar',
        'contact.button': 'Contacto',
        'contact.button.aria': 'Ir a contacto',
        
        // Footer
        'footer.copyright': 'Todos los derechos reservados.',
        
        // Botones
        'theme.toggle': 'Cambiar modo',
        'lang.toggle': 'Cambiar idioma',
    },
    en: {
        // Navegation
        'nav.about': 'About Me',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        
        // Header
        'header.role': 'Full-Stack Developer & Automation Specialist',
        
        // About Me
        'about.title': 'About Me',
        'about.intro': 'I am <strong>Franchesca Hernández</strong>, Full-Stack Developer and Automation Specialist.',
        'about.description': 'I seek to add value to teams that bet on innovation and continuous improvement. My strengths include:',
        'about.feature1.title': 'Full-Stack Web Development',
        'about.feature1.desc': 'API creation and business logic with PHP/Laravel, and frontend development with JavaScript and modern CSS technologies.',
        'about.feature2.title': 'Process Automation',
        'about.feature2.desc': 'Extensive experience in the Microsoft Power Platform ecosystem (Power Apps, Power Automate, Power BI, Dataverse).',
        'about.feature3.title': 'Additional Technical Skills',
        'about.feature3.desc': 'Solid knowledge in Go, C++, Docker and relational databases.',
        'about.feature4.title': 'Technical Training',
        'about.feature4.desc': 'Level 3 Professional Certificate in Computer Systems Programming.',
        
        // Projects
        'projects.title': 'Featured Projects',
        'projects.prev': 'Previous project',
        'projects.next': 'Next project',
        'projects.dressdolly.title': 'Dress Dolly App',
        'projects.dressdolly.desc': 'Cross-platform mobile app developed with Flutter to design and dress dolls. Includes advanced drawing tools, layer system, multiple users and unlockable achievements.',
        'projects.tooltips.title': 'Tooltips Examples',
        'projects.tooltips.desc': 'Practical implementations of tooltips using Bootstrap 5. Includes forms, buttons, tables and HTML content with customizable tooltips.',
        'projects.reclamaciones.title': 'Complaints Form',
        'projects.reclamaciones.desc': 'System to manage complaint forms. Allows registering, managing and tracking complaints efficiently.',
        'projects.googlemeet.title': 'Google Meet',
        'projects.googlemeet.desc': 'Automatic integration of Google Meet meetings in Laravel. Includes code examples, configuration and visual gallery of the implementation.',
        'projects.protectora.title': 'Animal Shelter',
        'projects.protectora.desc': 'Comprehensive app for managing an animal shelter. Allows registering pets, managing adoptions, controlling veterinary history and automating reminders for vaccines and check-ups.',
        'projects.supermercado.title': 'Supermarket Management',
        'projects.supermercado.desc': 'Solution for managing inventory, sales and orders in supermarkets. Includes control panels, automatic reports and intelligent supplier orders.',
        'projects.metro.title': 'Metro Incidents',
        'projects.metro.desc': 'Application to register and manage incidents in the metro network. Employees can report problems in real time, assign responsible parties and track resolution status.',
        'projects.all.title': 'All Projects',
        
        // Skills
        'skills.title': 'Skills and Experience',
        
        // Contact
        'contact.title': 'Contact',
        'contact.intro': 'Do you have a project in mind? I would love to hear from you and work with you.',
        'contact.name': 'Name',
        'contact.name.placeholder': 'Your name',
        'contact.email': 'Email',
        'contact.email.placeholder': 'Your email',
        'contact.message': 'Message',
        'contact.message.placeholder': 'Your message',
        'contact.submit': 'Send',
        'contact.button': 'Contact',
        'contact.button.aria': 'Go to contact',
        
        // Footer
        'footer.copyright': 'All rights reserved.',
        
        // Buttons
        'theme.toggle': 'Toggle mode',
        'lang.toggle': 'Change language',
    }
};

// Función para cambiar idioma
function setLanguage(lang) {
    if (!translations[lang]) return;
    
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    
    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Actualizar placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Actualizar atributos aria-label y title
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria');
        if (translations[lang][key]) {
            element.setAttribute('aria-label', translations[lang][key]);
        }
    });
    
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (translations[lang][key]) {
            element.setAttribute('title', translations[lang][key]);
        }
    });
    
    // Actualizar icono del botón de idioma
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.innerHTML = lang === 'es' ? '<i class="fas fa-globe"></i> EN' : '<i class="fas fa-globe"></i> ES';
    }
}

// Cargar idioma guardado o detectar del navegador
function loadLanguage() {
    const savedLang = localStorage.getItem('language') || navigator.language.split('-')[0] || 'es';
    setLanguage(savedLang === 'en' ? 'en' : 'es');
}

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
    // Cargar idioma
    loadLanguage();
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

    // Efecto de capas para el logo - movimiento con el cursor
    const base = document.querySelector(".logo-wrapper .base");
    const hair = document.querySelector(".logo-wrapper .hair");
    const eyes = document.querySelector(".logo-wrapper .eyes");
    const glowOutline = document.querySelector(".logo-wrapper .glow-outline");
    const logoWrapper = document.querySelector(".logo-wrapper");

    if (logoWrapper && base) {
        document.addEventListener("mousemove", (e) => {
            const rect = logoWrapper.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);

            const move = (element, intensity) => {
                if (element) {
                    element.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`;
                }
            };

            // Base (movimiento suave)
            move(base, 0.01);

            // Pelo (más lento, efecto viento)
            if (hair) {
                hair.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px) rotate(${x * 0.005}deg)`;
            }

            // Ojos (siguen al cursor)
            if (eyes) {
                let eyeX = x * 0.06;
                let eyeY = y * 0.06;

                // Limitar movimiento de los ojos
                const limit = 12;
                eyeX = Math.max(-limit, Math.min(limit, eyeX));
                eyeY = Math.max(-limit, Math.min(limit, eyeY));

                eyes.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
            }

            // Glow contorno (más movimiento)
            move(glowOutline, 0.12);
        });

        // Reset cuando el mouse sale del área
        logoWrapper.addEventListener("mouseleave", () => {
            const reset = (element) => {
                if (element) {
                    element.style.transform = "translate(0px, 0px)";
                }
            };

            reset(base);
            if (hair) {
                hair.style.transform = "translate(0px, 0px) rotate(0deg)";
            }
            if (eyes) {
                eyes.style.transform = "translate(0px, 0px)";
            }
            reset(glowOutline);
        });
    }

    // Botón de cambio de idioma
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const currentLang = localStorage.getItem('language') || 'es';
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
        
        // Inicializar icono del botón
        const currentLang = localStorage.getItem('language') || 'es';
        langToggle.innerHTML = currentLang === 'es' ? '<i class="fas fa-globe"></i> EN' : '<i class="fas fa-globe"></i> ES';
    }
});