
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