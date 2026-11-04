# Nébula · Landing page de una artista digital

Página de presentación de **Nébula**, una artista digital ficticia especializada en paisajes de ciencia ficción. Actividad de la UT3 *Archivos multimedia* de Diseño de Interfaces Web (2º DAW).

**Página online (GitHub Pages):** https://danirz10.github.io/UT3-Landing-Nebula/

---

## Estructura del proyecto

```
/
├── index.html
├── README.md
├── css/
│   └── style.css
└── assets/
    ├── img/
    │   ├── hero.webp
    │   ├── logo.svg
    │   ├── galeria-1.webp
    │   ├── galeria-2.webp
    │   ├── galeria-3.webp
    │   ├── cta-contacto.webp
    │   ├── poster.webp
    │   └── fotogramas/        ← fotogramas de origen de la animación (SVG y PNG)
    ├── audio/
    │   └── ambiente.mp3
    └── video/
        └── presentacion.mp4
```

Se mantiene la estructura pedida en el enunciado. Además, la hoja de estilos va en `css/style.css` para separar la presentación del contenido, y los fotogramas de origen de la animación se guardan en `assets/img/fotogramas/` como prueba de que se creó fotograma a fotograma.

---

## 1. Tabla de recursos y licencias

| Archivo | Recurso original | Autor | URL original | Licencia |
|---|---|---|---|---|
| `hero.webp` | Planeta alienígena con doble sol | Autor desconocido* | [pixabay.com/…/1112911](https://pixabay.com/es/illustrations/monta%C3%B1as-acantilados-nieve-1112911/) | [Licencia de contenido de Pixabay](https://pixabay.com/service/license-summary/) |
| `galeria-1.webp` | Paisaje montañoso alienígena con luna** | [JCK5D](https://pixabay.com/es/users/jck5d-2733400/) | [pixabay.com/…/1702788](https://pixabay.com/es/illustrations/planeta-ciencia-ficci%C3%B3n-1702788/) | [Licencia de contenido de Pixabay](https://pixabay.com/service/license-summary/) |
| `galeria-2.webp` | Titán bajo los anillos de Saturno | Autor desconocido* | [pixabay.com/…/7044849](https://pixabay.com/es/photos/saturno-espacio-luna-sistema-solar-7044849/) | [Licencia de contenido de Pixabay](https://pixabay.com/service/license-summary/) |
| `galeria-3.webp` | Nave espacial junto a un exoplaneta | [Terranaut](https://pixabay.com/es/users/terranaut-23759469/) | [pixabay.com/…/7799490](https://pixabay.com/es/photos/cosmos-universo-astronave-7799490/) | [Licencia de contenido de Pixabay](https://pixabay.com/service/license-summary/) |
| `presentacion.mp4` | Partícula, espacio, estrella | [DiaoChun](https://pixabay.com/es/users/diaochun-3373073/) | [pixabay.com/…/40222](https://pixabay.com/es/videos/part%C3%ADcula-espacio-estrella-galaxy-40222/) | [Licencia de contenido de Pixabay](https://pixabay.com/service/license-summary/) |
| `poster.webp` | Fotograma extraído de `presentacion.mp4` | DiaoChun (obra derivada) | Mismo que el vídeo | [Licencia de contenido de Pixabay](https://pixabay.com/service/license-summary/) |
| `ambiente.mp3` | Spaceship Ambience 1 | johnthewizar (Freesound), subido por [freesound_community](https://pixabay.com/es/users/freesound_community-46691455/) | [pixabay.com/…/35756](https://pixabay.com/es/sound-effects/pel%C3%ADculas-y-efectos-especiales-spaceship-ambience-1-35756/) | [Licencia de contenido de Pixabay](https://pixabay.com/service/license-summary/) |
| `logo.svg` | Logotipo de Nébula | Creación propia | — | Obra propia |
| `cta-contacto.webp` | Animación del botón de contacto | Creación propia | — | Obra propia |

**Sobre la licencia de Pixabay.** No es una licencia Creative Commons, sino una licencia propia de la plataforma con efectos parecidos a CC0: permite usar, modificar y distribuir el contenido de forma gratuita, también con fines comerciales, sin obligación de atribución. Aun así, cada recurso se acredita en el HTML con `<figure>` y `<figcaption>` (título, autor, enlace a la fuente y enlace a la licencia) como buena práctica.

\* **Sobre la autoría.** Las imágenes 1112911 y 7044849 aparecen en Pixabay sin autor visible: la cuenta del creador ya no está disponible. Su uso es legítimo porque siguen publicadas bajo la Licencia de contenido de Pixabay, que no exige atribución. Aun así se acreditan con título, enlace a la fuente original y enlace a la licencia, indicando "Autor desconocido".

\** **Sobre el origen.** Pixabay marca la imagen 1702788 como *generada por IA*. Se indica por transparencia; la licencia de uso es la misma.

---

## 2. Tratamiento realizado

| Archivo | Original | Tratamiento | Resultado final |
|---|---|---|---|
| `hero.webp` | JPG · 4096 × 2304 · 1,68 MB | Redimensionado a 1920 px de ancho manteniendo la proporción (Lanczos3) y compresión WebP con calidad 75 | **1920 × 1080 · 77 KB** (−95 %) |
| `logo.svg` | — | Diseñado a mano en código SVG: círculo con degradado, elipse para el anillo y trazado para la estrella. El anillo se dibuja en dos partes (detrás y delante del planeta) | Vector · < 1 KB |
| `galeria-1.webp` | JPG · 4400 × 2600 | Recorte a proporción 16:10 + redimensionado + WebP calidad 80 | **400 × 250 · 8,45 KB** |
| `galeria-2.webp` | JPG · 3840 × 2160 | Recorte a proporción 16:10 + redimensionado + WebP calidad 80 | **400 × 250 · 10,1 KB** |
| `galeria-3.webp` | JPG · 4000 × 2667 | Recorte a proporción 16:10 + redimensionado + WebP calidad 80 | **400 × 250 · 17,8 KB** |
| `cta-contacto.webp` | 3 fotogramas propios en SVG | Rasterizados a PNG de 160 × 100 y montados en orden 1-2-3-2 (150 ms por fotograma, bucle infinito). El orden de ida y vuelta evita el salto brusco al reiniciar el bucle | **WebP animado · 160 × 100 · 4 fotogramas · 5,07 KB** |
| `presentacion.mp4` | MP4 · 1920 × 1080 | Transcodificado a H.264, reducido a 1280 × 720, CRF 28 y eliminada la pista de audio | **MP4 H.264 · 1280 × 720 · 30 fps · 1234 kbps · 15 s · 2,21 MB** |
| `poster.webp` | Fotograma del segundo 2 del vídeo | Extracción del fotograma y exportación a WebP con calidad 75 | **1280 × 720 · 47 KB** |
| `ambiente.mp3` | MP3 · 160 kbps · 24 kHz · estéreo · 35 s | Recortado a 15 s, fade-in de 0 a 2 s, fade-out de 13 a 15 s y exportación a 128 kbps | **MP3 · 128 kbps · 44,1 kHz · estéreo · 15 s · 236 KB** |

Las miniaturas no tienen la misma proporción que los originales (400 × 250 es 16:10). Por eso primero se recortan a esa proporción, eligiendo el encuadre a mano, y después se redimensionan: así la imagen no se deforma.

La duración del MP3 aparece como 15,07 s porque el formato guarda el audio en bloques (*frames*) de unos 26 ms y el codificador añade un pequeño relleno al final. Es inherente al formato MP3.

---

## 3. Justificación técnica de formatos

### Imágenes: WebP frente a JPG y PNG
El hero, las miniaturas y el poster son imágenes fotográficas o ilustradas, con muchos degradados, así que necesitan compresión **con pérdida**. WebP consigue archivos entre un 25 % y un 35 % más ligeros que un JPG de calidad equivalente, todos los navegadores actuales lo soportan, y al exportar se eliminan los metadatos EXIF. Un PNG no tendría sentido aquí: al ser sin pérdida, pesaría varios MB.

### Logotipo: SVG frente a PNG
SVG es un formato **vectorial**: el logotipo se define con formas geométricas (círculo, elipse, trazados) en lugar de píxeles. Por eso:
- Se ve nítido a cualquier tamaño, desde el favicon de la pestaña hasta la cabecera.
- Pesa menos de 1 KB, frente a los varios KB de un PNG equivalente.
- Su fondo es transparente de forma nativa.
- Al ser código XML, se puede editar con cualquier editor de texto.

### Animación: WebP animado frente a GIF
El GIF está limitado a 256 colores, así que el degradado violeta-cian del sobre mostraría bandas de color, y además comprime peor. El WebP animado admite color completo y transparencia, y pesa bastante menos: la animación ocupa solo 5,07 KB. Es la opción que el enunciado recomienda por rendimiento.

### Vídeo: MP4 (H.264) frente a AVI y WebM
- **AVI** es un contenedor antiguo, pesado y sin soporte nativo en la etiqueta `<video>`.
- **WebM** (VP9/AV1) comprime algo mejor, pero su compatibilidad es menor.
- **MP4 con H.264** es la combinación con soporte universal: todos los navegadores, iOS, Android y reproductores.

Con 720p y CRF 28 el vídeo ya queda muy por debajo del límite de 3 MB (2,21 MB), así que la ventaja de peso de WebM no compensa su menor compatibilidad.

**Bitrate.** 1234 kbps es un valor adecuado para un vídeo de 720p a 30 fps mostrado dentro de una página web. Se ha eliminado el audio porque el vídeo es decorativo y el sonido ambiental de la página va aparte, en `<audio>`. Así se ahorra peso.

### Audio: MP3 frente a WAV
MP3 es el formato de audio con soporte universal en navegadores. Un WAV de 15 s ocuparía unos 2,6 MB, frente a los 236 KB del MP3.

**Bitrate.** El original estaba a 160 kbps. Se exporta a **128 kbps** porque exportar a 192 kbps no recuperaría la calidad que el original ya no tiene: solo aumentaría el peso. 128 kbps es el valor estándar más cercano por debajo del original y es suficiente para un ambiente de fondo.

---

## 4. Herramientas utilizadas

| Proceso | Herramienta | Por qué |
|---|---|---|
| Redimensionar y comprimir el hero a WebP | [Squoosh](https://squoosh.app) (web) | Permite comparar el original y el resultado en directo mientras se ajusta la calidad, y procesa en el navegador sin subir el archivo. |
| Crear el logotipo y los fotogramas | Editor de código (Antigravity) | El SVG es texto: se escribe a mano. |
| Recortar y redimensionar las miniaturas a WebP | [BIRME](https://www.birme.net) (web) | Recorta y redimensiona por lotes a una medida exacta sin deformar, permite elegir el encuadre de cada imagen y exporta directamente a WebP. |
| Pasar los fotogramas de SVG a PNG | [ezgif – SVG to PNG](https://ezgif.com/svg-to-png) (web) | Rasteriza el SVG al tamaño exacto. |
| Montar la animación | [ezgif – WebP Maker](https://ezgif.com/webp-maker) (web) | Permite fijar el orden de los fotogramas, el retardo y el bucle, y exporta a WebP animado. |
| Transcodificar y comprimir el vídeo | [CloudConvert](https://cloudconvert.com) (web) | Permite elegir el códec (x264/H.264), la resolución, el CRF y quitar el audio, sin instalar nada. |
| Extraer el poster del vídeo | FFmpeg | Extrae un fotograma concreto (segundo 2) y lo exporta a WebP. |
| Recortar el audio, aplicar fundidos y exportar | [AudioMass](https://audiomass.co) (web) | Editor de audio en el navegador con recorte, Fade In / Fade Out y exportación a MP3 eligiendo el bitrate. |

---

## 5. Integración en HTML5

- **Estructura semántica:** `<header>` (logotipo y `<nav>`), `<main>` con una `<section>` por bloque (hero, sobre mí, galería, vídeo, audio, contacto) y `<footer>`.
- **Atribución:** el hero, cada miniatura de la galería, el vídeo y el audio van dentro de `<figure>`, con su `<figcaption>` (título, autor, fuente y licencia).
- **Multimedia:**
  - `<img>` para las imágenes.
  - `<video controls poster="assets/img/poster.webp">` con `<source type="video/mp4">`.
  - `<audio controls>`.
  - Ambos incluyen un texto alternativo con enlace de descarga, por si el navegador no puede reproducirlos.
- **WPO y accesibilidad:**
  - Todas las imágenes llevan `alt` descriptivo, `width`, `height` y `loading="lazy"`. Indicar las dimensiones permite al navegador reservar el hueco antes de que cargue la imagen y evita saltos de contenido.
  - El vídeo lleva `poster`, para no mostrar un recuadro negro mientras carga, y `preload="metadata"`, para que no se descargue entero hasta que se pulse play.
- **Guía de estilo:** la paleta de colores sale del logotipo: fondo espacial `#0b0d1f`, violeta `#8a5cf6`, cian `#5ce1e6` y blanco estelar `#f2f0ff`. Así todo el perfil mantiene una estética coherente.
