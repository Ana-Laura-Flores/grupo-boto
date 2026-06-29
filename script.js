
// Seleccionamos el botón y el menú móvil
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Escuchamos el click en el botón hamburguesa
menuBtn.addEventListener('click', () => {
    // Alterna la visibilidad del menú
    mobileMenu.classList.toggle('hidden');
    
    // Cambia el icono de las 3 rayitas (bars) por una X (xmark) al abrir/cerrar
    const icon = menuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.classList.replace('fa-xmark', 'fa-bars');
    } else {
        icon.classList.replace('fa-bars', 'fa-xmark');
    }
});

// =====================================================================
// CONTROL DEL LIGHTBOX (Galería de Trabajos)
// =====================================================================
function abrirLightbox(rutaImagen) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    if (lightbox && lightboxImg) {
        lightboxImg.src = rutaImagen; // Inserta la ruta correcta
        lightbox.classList.remove('hidden'); // Muestra el modal
        document.body.classList.add('overflow-hidden'); // Evita el scroll de fondo
    }
}

function cerrarLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    if (lightbox) {
        lightbox.classList.add('hidden'); // Oculta el modal
        if (lightboxImg) lightboxImg.src = ''; // Limpia la ruta vieja
        document.body.classList.remove('overflow-hidden'); // Devuelve el scroll normal
    }
}

// Cerrar también si presionan la tecla Escape (Súper UX)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        cerrarLightbox();
    }
});