// Función para agregar la clase 'fadeIn' a los elementos mientras se hace scroll
$(document).ready(function () {
            // Ejecutar al cargar la página
            checkFadeElements();

            // Smooth scrolling para todos los enlaces internos
            $('a[href^="#"]').on('click', function (event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 70
                    }, 1000);
                }
            });

            // Activar tooltips de Bootstrap
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });

            // Manejar los modales de proyectos
            $('.modal').on('show.bs.modal', function (e) {
                // Pausar otros videos si algún modal está abierto
                $('.modal iframe').each(function () {
                    var src = $(this).attr('src');
                    $(this).attr('src', '');
                    $(this).attr('src', src);
                });
            });

            // Detectar scroll para efectos de animación
            $(window).scroll(function () {
                checkFadeElements();

                // Resaltar item de navegación según la sección visible
                var scrollPosition = $(window).scrollTop();

                // Determinar qué sección es visible actualmente
                $('section').each(function () {
                    var target = $(this).attr('id');
                    var offset = $(this).offset().top - 100;
                    var height = $(this).height();

                    if (scrollPosition >= offset && scrollPosition < offset + height) {
                        $('.navbar-nav .nav-link').removeClass('active');
                        $('.navbar-nav .nav-link[href="#' + target + '"]').addClass('active');
                    }
                });
            });

            // Validación simple para el formulario de contacto si existe
            if ($('#contactForm').length) {
                $('#contactForm').submit(function (event) {
                            event