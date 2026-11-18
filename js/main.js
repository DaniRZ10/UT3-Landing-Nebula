/* =========================================================
   Nébula · Interactividad (UT4)
   Vanilla JS: selección con querySelector, eventos con
   addEventListener y estilos cambiando clases (classList).
   ========================================================= */


/* ---------- 1. GALERÍA: visor que cambia al pulsar una miniatura ---------- */

const visorImagen = document.querySelector('#visor-imagen');
const visorTitulo = document.querySelector('#visor-titulo');
const miniaturas = document.querySelectorAll('.miniatura');

// Cuando la nueva imagen termina de cargar, se vuelve a mostrar (fundido de entrada)
visorImagen.addEventListener('load', function () {
  visorImagen.classList.remove('oculta');
});

// Si la imagen fallara, también se muestra, para que el visor no se quede invisible
visorImagen.addEventListener('error', function () {
  visorImagen.classList.remove('oculta');
});

miniaturas.forEach(function (miniatura) {
  miniatura.addEventListener('click', function () {
    // Si ya es la imagen que se está viendo, no hay nada que cambiar
    if (miniatura.classList.contains('activa')) {
      return;
    }

    // Marcar la miniatura pulsada como activa y desmarcar las demás
    miniaturas.forEach(function (otra) {
      otra.classList.remove('activa');
      otra.setAttribute('aria-pressed', 'false');
    });
    miniatura.classList.add('activa');
    miniatura.setAttribute('aria-pressed', 'true');

    // Fundido de salida: la clase "oculta" pone la opacidad a 0 con una transición
    visorImagen.classList.add('oculta');

    // Al terminar el fundido (300 ms, lo mismo que la transición CSS) se cambia la imagen
    setTimeout(function () {
      visorImagen.src = miniatura.dataset.grande;
      visorImagen.alt = miniatura.dataset.alt;
      visorTitulo.textContent = miniatura.dataset.titulo;
    }, 300);
  });
});



/* ---------- 2. MODAL DE VÍDEO: .play() al abrir y .pause() al cerrar ---------- */

const modal = document.querySelector('#modal-video');
const video = document.querySelector('#video-reel');
const botonAbrir = document.querySelector('#abrir-video');
const botonCerrar = document.querySelector('#cerrar-video');

function abrirModal() {
  modal.classList.add('abierto');
  modal.setAttribute('aria-hidden', 'false');
  botonCerrar.focus();

  // .play() devuelve una Promesa: si el navegador bloquea la reproducción, se captura el error
  video.play().catch(function () {
    // El usuario puede darle al play con los controles del propio vídeo
  });
}

function cerrarModal() {
  modal.classList.remove('abierto');
  modal.setAttribute('aria-hidden', 'true');

  // Detener el vídeo: se pausa y se vuelve al principio
  video.pause();
  video.currentTime = 0;

  // Devolver el foco al botón que abrió el modal (accesibilidad con teclado)
  botonAbrir.focus();
}

botonAbrir.addEventListener('click', abrirModal);
botonCerrar.addEventListener('click', cerrarModal);

// Clic fuera del contenido (en el fondo oscuro) también cierra el modal
modal.addEventListener('click', function (evento) {
  if (evento.target === modal) {
    cerrarModal();
  }
});

// La tecla Escape también cierra el modal
document.addEventListener('keydown', function (evento) {
  if (evento.key === 'Escape' && modal.classList.contains('abierto')) {
    cerrarModal();
  }
});