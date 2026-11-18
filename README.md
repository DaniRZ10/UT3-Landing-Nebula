# Nébula · Landing page de una artista digital

Página de presentación de **Nébula**, una artista digital ficticia especializada
en paisajes de ciencia ficción. Actividad de la UT3 _Archivos multimedia_ de
Diseño de Interfaces Web (2º DAW), ampliada en la UT4 _Contenido interactivo_
(rama `ut4`).

- La entrega de la UT3 está en la rama `main`.
- La de la UT4 está en la rama `ut4`, que es la que publica GitHub Pages. Los
  cambios de la UT4 se explican en el
  [apartado 6](#6-ut4--contenido-interactivo).

**Página online (GitHub Pages):** https://danirz10.github.io/UT3-Landing-Nebula/

---

## Estructura del proyecto

```
/
├── index.html
├── credits.html             ← (UT4) créditos y licencias
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js              ← (UT4) galería, modal de vídeo y reproductor de audio
└── assets/
    ├── img/
    │   ├── hero.webp
    │   ├── logo.svg         ← se usa como favicon; en la cabecera el logo va inline
    │   ├── galeria-1.webp … galeria-3.webp
    │   ├── galeria-1-grande.webp … galeria-3-grande.webp   ← (UT4) versiones del visor
    │   ├── cta-contacto.webp
    │   ├── poster.webp
    │   └── fotogramas/        ← fotogramas de origen de la animación (SVG y PNG)
    ├── audio/
    │   └── ambiente.mp3
    └── video/
        └── presentacion.mp4
```

Se mantiene la estructura pedida en el enunciado. Además, la hoja de estilos va
en `css/style.css` para separar la presentación del contenido, y los fotogramas
de origen de la animación se guardan en `assets/img/fotogramas/` como prueba de
que se creó fotograma a fotograma.

---

## 1. Tabla de recursos y licencias

| Archivo             | Recurso original                         | Autor                                                                                                                  | URL original                                                                                                                | Licencia                                                                         |
| ------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `hero.webp`         | Planeta alienígena con doble sol         | Autor desconocido*                                                                                                     | [pixabay.com/…/1112911](https://pixabay.com/es/illustrations/monta%C3%B1as-acantilados-nieve-1112911/)                      | [Licencia de contenido de Pixabay](https://pixabay.com/service/license-summary/) |
| `galeria-1.webp`    | Paisaje montañoso alienígena con luna**  | [JCK5D](https://pixabay.com/es/users/jck5d-2733400/)                                                                   | [pixabay.com/…/1702788](https://pixabay.com/es/illustrations/planeta-ciencia-ficci%C3%B3n-1702788/)                         | [Licencia de contenido de Pixabay](https://pixabay.com/service/license-summary/) |
| `galeria-2.webp`    | Titán bajo los anillos de Saturno        | Autor desconocido*                                                                                                     | [pixabay.com/…/7044849](https://pixabay.com/es/photos/saturno-espacio-luna-sistema-solar-7044849/)                          | [Licencia de contenido de Pixabay](https://pixabay.com/service/license-summary/) |
| `galeria-3.webp`    | Nave espacial junto a un exoplaneta      | [Terranaut](https://pixabay.com/es/users/terranaut-23759469/)                                                          | [pixabay.com/…/7799490](https://pixabay.com/es/photos/cosmos-universo-astronave-7799490/)                                   | [Licencia de contenido de Pixabay](https://pixabay.com/service/license-summary/) |
| `presentacion.mp4`  | Partícula, espacio, estrella             | [DiaoChun](https://pixabay.com/es/users/diaochun-3373073/)                                                             | [pixabay.com/…/40222](https://pixabay.com/es/videos/part%C3%ADcula-espacio-estrella-galaxy-40222/)                          | [Licencia de contenido de Pixabay](https://pixabay.com/service/license-summary/) |
| `poster.webp`       | Fotograma extraído de `presentacion.mp4` | DiaoChun (obra derivada)                                                                                               | Mismo que el vídeo                                                                                                          | [Licencia de contenido de Pixabay](https://pixabay.com/service/license-summary/) |
| `ambiente.mp3`      | Spaceship Ambience 1                     | johnthewizar (Freesound), subido por [freesound_community](https://pixabay.com/es/users/freesound_community-46691455/) | [pixabay.com/…/35756](https://pixabay.com/es/sound-effects/pel%C3%ADculas-y-efectos-especiales-spaceship-ambience-1-35756/) | [Licencia de contenido de Pixabay](https://pixabay.com/service/license-summary/) |
| `logo.svg`          | Logotipo de Nébula                       | Creación propia                                                                                                        | —                                                                                                                           | Obra propia                                                                      |
| `cta-contacto.webp` | Animación del botón de contacto          | Creación propia                                                                                                        | —                                                                                                                           | Obra propia                                                                      |

**Sobre la licencia de Pixabay.** No es una licencia Creative Commons, sino una
licencia propia de la plataforma con efectos parecidos a CC0: permite usar,
modificar y distribuir el contenido de forma gratuita, también con fines
comerciales, sin obligación de atribución. Aun así, cada recurso se acredita en
el HTML con `<figure>` y `<figcaption>` (título, autor, enlace a la fuente y
enlace a la licencia) como buena práctica.

\* **Sobre la autoría.** Las imágenes 1112911 y 7044849 aparecen en Pixabay sin
autor visible: la cuenta del creador ya no está disponible. Su uso es legítimo
porque siguen publicadas bajo la Licencia de contenido de Pixabay, que no exige
atribución. Aun así se acreditan con título, enlace a la fuente original y
enlace a la licencia, indicando "Autor desconocido".

\** **Sobre el origen.** Pixabay marca la imagen 1702788 como _generada por IA_.
Se indica por transparencia; la licencia de uso es la misma.

---

## 2. Tratamiento realizado

| Archivo             | Original                                 | Tratamiento                                                                                                                                                              | Resultado final                                                  |
| ------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| `hero.webp`         | JPG · 4096 × 2304 · 1,68 MB              | Redimensionado a 1920 px de ancho manteniendo la proporción (Lanczos3) y compresión WebP con calidad 75                                                                  | **1920 × 1080 · 77 KB** (−95 %)                                  |
| `logo.svg`          | —                                        | Diseñado a mano en código SVG: círculo con degradado, elipse para el anillo y trazado para la estrella. El anillo se dibuja en dos partes (detrás y delante del planeta) | Vector · < 1 KB                                                  |
| `galeria-1.webp`    | JPG · 4400 × 2600                        | Recorte a proporción 16:10 + redimensionado + WebP calidad 80                                                                                                            | **400 × 250 · 8,45 KB**                                          |
| `galeria-2.webp`    | JPG · 3840 × 2160                        | Recorte a proporción 16:10 + redimensionado + WebP calidad 80                                                                                                            | **400 × 250 · 10,1 KB**                                          |
| `galeria-3.webp`    | JPG · 4000 × 2667                        | Recorte a proporción 16:10 + redimensionado + WebP calidad 80                                                                                                            | **400 × 250 · 17,8 KB**                                          |
| `cta-contacto.webp` | 3 fotogramas propios en SVG              | Rasterizados a PNG de 160 × 100 y montados en orden 1-2-3-2 (150 ms por fotograma, bucle infinito). El orden de ida y vuelta evita el salto brusco al reiniciar el bucle | **WebP animado · 160 × 100 · 4 fotogramas · 5,07 KB**            |
| `presentacion.mp4`  | MP4 · 1920 × 1080                        | Transcodificado a H.264, reducido a 1280 × 720, CRF 28 y eliminada la pista de audio                                                                                     | **MP4 H.264 · 1280 × 720 · 30 fps · 1234 kbps · 15 s · 2,21 MB** |
| `poster.webp`       | Fotograma del segundo 2 del vídeo        | Extracción del fotograma y exportación a WebP con calidad 75                                                                                                             | **1280 × 720 · 47 KB**                                           |
| `ambiente.mp3`      | MP3 · 160 kbps · 24 kHz · estéreo · 35 s | Recortado a 15 s, fade-in de 0 a 2 s, fade-out de 13 a 15 s y exportación a 128 kbps                                                                                     | **MP3 · 128 kbps · 44,1 kHz · estéreo · 15 s · 236 KB**          |

Las miniaturas no tienen la misma proporción que los originales (400 × 250 es
16:10). Por eso primero se recortan a esa proporción, eligiendo el encuadre a
mano, y después se redimensionan: así la imagen no se deforma.

La duración del MP3 aparece como 15,07 s porque el formato guarda el audio en
bloques (_frames_) de unos 26 ms y el codificador añade un pequeño relleno al
final. Es inherente al formato MP3.

---

## 3. Justificación técnica de formatos

### Imágenes: WebP frente a JPG y PNG

El hero, las miniaturas y el poster son imágenes fotográficas o ilustradas, con
muchos degradados, así que necesitan compresión **con pérdida**. WebP consigue
archivos entre un 25 % y un 35 % más ligeros que un JPG de calidad equivalente,
todos los navegadores actuales lo soportan, y al exportar se eliminan los
metadatos EXIF. Un PNG no tendría sentido aquí: al ser sin pérdida, pesaría
varios MB.

### Logotipo: SVG frente a PNG

SVG es un formato **vectorial**: el logotipo se define con formas geométricas
(círculo, elipse, trazados) en lugar de píxeles. Por eso:

- Se ve nítido a cualquier tamaño, desde el favicon de la pestaña hasta la
  cabecera.
- Pesa menos de 1 KB, frente a los varios KB de un PNG equivalente.
- Su fondo es transparente de forma nativa.
- Al ser código XML, se puede editar con cualquier editor de texto.

### Animación: WebP animado frente a GIF

El GIF está limitado a 256 colores, así que el degradado violeta-cian del sobre
mostraría bandas de color, y además comprime peor. El WebP animado admite color
completo y transparencia, y pesa bastante menos: la animación ocupa solo 5,07
KB. Es la opción que el enunciado recomienda por rendimiento.

### Vídeo: MP4 (H.264) frente a AVI y WebM

- **AVI** es un contenedor antiguo, pesado y sin soporte nativo en la etiqueta
  `<video>`.
- **WebM** (VP9/AV1) comprime algo mejor, pero su compatibilidad es menor.
- **MP4 con H.264** es la combinación con soporte universal: todos los
  navegadores, iOS, Android y reproductores.

Con 720p y CRF 28 el vídeo ya queda muy por debajo del límite de 3 MB (2,21 MB),
así que la ventaja de peso de WebM no compensa su menor compatibilidad.

**Bitrate.** 1234 kbps es un valor adecuado para un vídeo de 720p a 30 fps
mostrado dentro de una página web. Se ha eliminado el audio porque el vídeo es
decorativo y el sonido ambiental de la página va aparte, en `<audio>`. Así se
ahorra peso.

### Audio: MP3 frente a WAV

MP3 es el formato de audio con soporte universal en navegadores. Un WAV de 15 s
ocuparía unos 2,6 MB, frente a los 236 KB del MP3.

**Bitrate.** El original estaba a 160 kbps. Se exporta a **128 kbps** porque
exportar a 192 kbps no recuperaría la calidad que el original ya no tiene: solo
aumentaría el peso. 128 kbps es el valor estándar más cercano por debajo del
original y es suficiente para un ambiente de fondo.

---

## 4. Herramientas utilizadas

| Proceso                                        | Herramienta                                              | Por qué                                                                                                                                     |
| ---------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Redimensionar y comprimir el hero a WebP       | [Squoosh](https://squoosh.app) (web)                     | Permite comparar el original y el resultado en directo mientras se ajusta la calidad, y procesa en el navegador sin subir el archivo.       |
| Crear el logotipo y los fotogramas             | Editor de código (Antigravity)                           | El SVG es texto: se escribe a mano.                                                                                                         |
| Recortar y redimensionar las miniaturas a WebP | [BIRME](https://www.birme.net) (web)                     | Recorta y redimensiona por lotes a una medida exacta sin deformar, permite elegir el encuadre de cada imagen y exporta directamente a WebP. |
| (UT4) Versiones grandes de la galería          | Python + Pillow                                          | Permite recortar exactamente la misma zona que cada miniatura y exportar a WebP en un solo paso.                                            |
| Pasar los fotogramas de SVG a PNG              | [ezgif – SVG to PNG](https://ezgif.com/svg-to-png) (web) | Rasteriza el SVG al tamaño exacto.                                                                                                          |
| Montar la animación                            | [ezgif – WebP Maker](https://ezgif.com/webp-maker) (web) | Permite fijar el orden de los fotogramas, el retardo y el bucle, y exporta a WebP animado.                                                  |
| Transcodificar y comprimir el vídeo            | [CloudConvert](https://cloudconvert.com) (web)           | Permite elegir el códec (x264/H.264), la resolución, el CRF y quitar el audio, sin instalar nada.                                           |
| Extraer el poster del vídeo                    | FFmpeg                                                   | Extrae un fotograma concreto (segundo 2) y lo exporta a WebP.                                                                               |
| Recortar el audio, aplicar fundidos y exportar | [AudioMass](https://audiomass.co) (web)                  | Editor de audio en el navegador con recorte, Fade In / Fade Out y exportación a MP3 eligiendo el bitrate.                                   |

---

## 5. Integración en HTML5

- **Estructura semántica:** `<header>` (logotipo y `<nav>`), `<main>` con una
  `<section>` por bloque (hero, sobre mí, galería, vídeo, audio, contacto) y
  `<footer>`.
- **Atribución:** el hero, cada miniatura de la galería, el vídeo y el audio van
  dentro de `<figure>`, con su `<figcaption>` (título, autor, fuente y
  licencia).
- **Multimedia:**
  - `<img>` para las imágenes.
  - `<video controls poster="assets/img/poster.webp">` con
    `<source type="video/mp4">`.
  - `<audio controls>`.
  - Ambos incluyen un texto alternativo con enlace de descarga, por si el
    navegador no puede reproducirlos.
- **WPO y accesibilidad:**
  - Todas las imágenes llevan `alt` descriptivo, `width`, `height` y
    `loading="lazy"`. Indicar las dimensiones permite al navegador reservar el
    hueco antes de que cargue la imagen y evita saltos de contenido.
  - El vídeo lleva `poster`, para no mostrar un recuadro negro mientras carga, y
    `preload="metadata"`, para que no se descargue entero hasta que se pulse
    play.
- **Guía de estilo:** la paleta de colores sale del logotipo: fondo espacial
  `#0b0d1f`, violeta `#8a5cf6`, cian `#5ce1e6` y blanco estelar `#f2f0ff`. Así
  todo el perfil mantiene una estética coherente.

---

## 6. UT4 · Contenido interactivo

La UT4 parte de la landing de la UT3 y le añade interacción con JavaScript puro
(Vanilla JS), efectos CSS3, SVG inline y control multimedia con la API
`HTMLMediaElement`.

Todo el comportamiento está en `js/main.js`, separado del HTML (estructura) y
del CSS (presentación). Los eventos se registran con `addEventListener`, sin
atributos `onclick=""` en el HTML. Los cambios visuales se hacen añadiendo y
quitando clases con `classList`.

### 6.1 Logo en SVG inline

El logotipo de la cabecera ya no se carga con `<img src="logo.svg">`: su código
`<svg>` está escrito directamente dentro del HTML.

- El anillo (`.logo-anillo`) y la estrella (`.logo-estrella`) no llevan el color
  fijo en el SVG. Lo toman de la variable CSS `--logo-detalle`.
- En `.marca:hover` y `.marca:focus` la variable pasa de blanco a cian, así que
  cambian el `stroke` del anillo y el `fill` de la estrella, con una transición
  de 0,3 s. Además, el logo crece un poco
  (`transform: scale(1.1) rotate(-5deg)`).
- Accesibilidad: `role="img"` y un `<title>` interno enlazado con
  `aria-labelledby`.

**Ventajas del SVG inline frente a `<img>`:**

| Ventaja                     | En este proyecto                                                                                                                                                                                                            |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Control total con CSS**   | Al formar parte del DOM, CSS puede cambiar `fill` y `stroke` de cada forma por separado. Con `<img>` el SVG es una caja cerrada y eso no se puede hacer.                                                                    |
| **Temas con variables CSS** | El color de los detalles depende de `--logo-detalle`: basta con cambiar la variable para cambiar el logo.                                                                                                                   |
| **Menos peticiones HTTP**   | El logo llega en la misma petición que el HTML.                                                                                                                                                                             |
| **Accesibilidad**           | El `<title>` interno se enlaza con `aria-labelledby`.                                                                                                                                                                       |
| **Cuándo no conviene**      | En ilustraciones muy complejas, con miles de líneas: ensucian el HTML y no se pueden cachear aparte. El logo es pequeño (5 formas), así que inline es la mejor opción. `logo.svg` se mantiene como archivo para el favicon. |

### 6.2 Galería dinámica

- Encima de las miniaturas hay un **visor** (`#visor-imagen`) que muestra la
  **versión a alta resolución** (1280 × 800, WebP) de la imagen elegida.
- Cada miniatura es un `<button>` con atributos `data-grande`, `data-alt` y
  `data-titulo`. Al ser botón, se puede usar con ratón, dedo o teclado.
- Al pulsar una miniatura, el JavaScript:
  1. marca la miniatura como activa (clase `activa`, `aria-pressed`);
  2. añade la clase `oculta` al visor, que lo funde a opacidad 0;
  3. a los 300 ms cambia `src`, `alt` y el título del visor;
  4. cuando la nueva imagen termina de cargar (evento `load`), quita la clase
     `oculta` y el visor vuelve a aparecer con un fundido.
- **Feedback visual:** las miniaturas están algo apagadas (`opacity: 0.7`) y en
  `:hover` o `:focus` crecen (`transform: scale(1.05)`) y se iluminan, con
  `transition`. La que se está viendo lleva el borde cian.

| Versión grande          | Medidas    | Peso  |
| ----------------------- | ---------- | ----- |
| `galeria-1-grande.webp` | 1280 × 800 | 35 KB |
| `galeria-2-grande.webp` | 1280 × 800 | 53 KB |
| `galeria-3-grande.webp` | 1280 × 800 | 75 KB |

Se han generado con Python (librería Pillow) a partir de los originales de
Pixabay: se recorta la misma zona 16:10 que se usó para cada miniatura, se
redimensiona a 1280 × 800 (Lanczos) y se exporta a WebP con calidad 75.

### 6.3 Modal de vídeo

- La sección de vídeo ya no muestra el reproductor: muestra el botón **"Ver Reel
  de Animación"**.
- El modal está hecho con **JS y CSS propios**, sin Bootstrap. El resto de la
  web no usa Bootstrap y su CSS habría cambiado los estilos existentes.
- **Al abrir:** se añade la clase `abierto` (el modal aparece con un fundido y
  un ligero zoom) y se llama a `video.play()`. Como `.play()` devuelve una
  Promesa, el posible rechazo por las políticas de autoplay se captura con
  `.catch()`.
- **Al cerrar**, con el botón ✕, con un clic fuera del contenido o con la tecla
  Escape: se llama a `video.pause()` y se pone `currentTime = 0`, de modo que el
  vídeo se detiene y vuelve al principio. Después el foco vuelve al botón que
  abrió el modal.
- El vídeo conserva `poster`, `controls`, `playsinline` (necesario en iOS) y su
  `<figcaption>` con la atribución.

### 6.4 Reproductor de audio propio

- El `<audio>` ya no tiene el atributo `controls`: se maneja con dos botones
  propios.
- **"Escuchar ambiente espacial"**: comprueba `audio.paused` y llama a `.play()`
  o a `.pause()`. Su texto cambia a "Pausar ambiente" y vuelve al original.
- **"Silenciar"**: alterna `audio.muted` y cambia a "Activar sonido".
- El texto del botón se actualiza con los eventos del propio audio (`play`,
  `pause` y `ended`), no con el clic. Así siempre refleja el estado real; por
  ejemplo, al terminar los 15 s el botón vuelve solo a "Escuchar ambiente
  espacial".

### 6.5 Feedback visual y transiciones CSS3

Todos los elementos interactivos tienen estado `:hover` **y** `:focus`, con
`transition` de 0,3 s sobre propiedades que procesa la GPU (`transform`,
`opacity`) y colores:

| Elemento                 | Efecto                                                           |
| ------------------------ | ---------------------------------------------------------------- |
| Logo                     | Cambio de color (variable CSS) + `scale` + `rotate`              |
| Menú                     | Cambio de color y de fondo; padding para llegar a 44 px de alto  |
| Miniaturas               | `scale(1.05)` + `opacity` de 0,7 a 1                             |
| Visor                    | Fundido con `opacity` al cambiar de imagen                       |
| Botones de vídeo y audio | `scale(1.05)` + inversión de colores; `scale(0.97)` en `:active` |
| Modal                    | Fundido de entrada y salida + `scale` del contenido              |
| Botón de cerrar          | `scale(1.1)` + inversión de colores                              |
| Botón de contacto        | `scale(1.05)` + fondo                                            |
| Enlaces                  | Cambio de color                                                  |

Además, `a:focus` y `button:focus` muestran un contorno cian de 3 px, para que
se vea en todo momento dónde está el foco al navegar con el teclado.

Por coherencia visual, todos los títulos de sección (`.seccion h2`) están
centrados, igual que el bloque de audio.

### 6.6 Propiedad intelectual y licencias

- **Créditos:** `credits.html`, enlazado desde el footer, recoge todos los
  recursos con autor, fuente y licencia. Las atribuciones siguen también en los
  `<figcaption>` de cada recurso.
- **Licencia del proyecto:**
  [Creative Commons Atribución 4.0 Internacional (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.es),
  indicada en el footer con `rel="license"`.

**Por qué CC BY 4.0 y compatibilidad de licencias.** CC BY permite copiar,
adaptar y compartir la obra, incluso con fines comerciales, siempre que se cite
a la autora. Es compatible con los recursos usados porque:

- La licencia **solo cubre la parte propia**: código HTML/CSS/JS, logotipo,
  animación de contacto y diseño de la página.
- Los recursos de Pixabay **no se relicencian**: mantienen su Licencia de
  contenido de Pixabay, que permite usarlos y modificarlos (recortarlos,
  comprimirlos, recodificarlos…) dentro de una obra mayor como esta web, también
  con fines comerciales y sin atribución obligatoria. Lo que esa licencia no
  permite es venderlos o redistribuirlos sueltos, sin modificar, como si fueran
  obra propia. Por eso en el footer y en `credits.html` se indica que los
  recursos de terceros mantienen su propia licencia.

**Escenario hipotético: ¿qué pasaría si un recurso fuera CC BY-SA?**

CC BY-SA ("Compartir Igual") tiene una cláusula **copyleft**: toda obra derivada
de ese recurso tiene que distribuirse con **la misma licencia** (CC BY-SA) o una
compatible. Si, por ejemplo, una de las imágenes de la galería fuera CC BY-SA:

1. Las versiones que hemos hecho de ella (la miniatura recortada y la versión
   grande) son **obras derivadas**, así que tendrían que publicarse bajo CC
   BY-SA, no bajo CC BY.
2. Habría que **atribuir** al autor, enlazar la licencia e **indicar los
   cambios** realizados (recorte, redimensionado, conversión a WebP).
3. Si la imagen solo se **muestra** en la página sin integrarse en otra obra, la
   web en conjunto puede considerarse una colección, y el resto (código, logo…)
   podría seguir con CC BY. Pero si el recurso se integra en una obra nueva (por
   ejemplo, un montaje que combine la imagen con el logo), esa obra entera
   tendría que ser CC BY-SA.
4. Nunca se podría aplicar a ese material una licencia **más restrictiva**, como
   CC BY-NC o "todos los derechos reservados".

En resumen: con un recurso CC BY-SA, lo más seguro sería licenciar el proyecto
completo como **CC BY-SA 4.0**, que es compatible "hacia arriba" con material CC
BY y de Pixabay.

### 6.7 Verificación cross-browser y multi-dispositivo

**Navegadores** (marcar tras probar cada uno):

| Prueba                                                         | Chrome | Firefox | Edge |
| -------------------------------------------------------------- | ------ | ------- | ---- |
| El logo cambia de color en `:hover` y con Tab (`:focus`)       | ✅     | ✅      | ✅   |
| La galería cambia la imagen grande con fundido                 | ✅     | ✅      | ✅   |
| El modal se abre y el vídeo arranca solo                       | ✅     | ✅      | ✅   |
| El modal se cierra (✕, clic fuera, Escape) y el vídeo se pausa | ✅     | ✅      | ✅   |
| El botón de audio reproduce y pausa; "Silenciar" funciona      | ✅     | ✅      | ✅   |
| Sin errores en la consola (F12 → Console)                      | ✅     | ✅      | ✅   |

**Modo dispositivo (DevTools, F12 → Ctrl+Shift+M)**, a 375 px de ancho (iPhone
SE) y a 768 px (iPad Mini):

| Elemento táctil              | Tamaño medido a 375 px  | ≥ 44 × 44 px |
| ---------------------------- | ----------------------- | ------------ |
| Enlaces del menú             | entre 68 × 45 y 96 × 45 | ✅           |
| Logo (enlace a inicio)       | 155 × 60                | ✅           |
| Miniaturas de la galería     | 311 × 196               | ✅           |
| "Ver Reel de Animación"      | 303 × 68                | ✅           |
| Cerrar modal (✕)             | 44 × 44                 | ✅           |
| "Escuchar ambiente espacial" | 271 × 49                | ✅           |
| "Silenciar"                  | 120 × 49                | ✅           |
| Botón de contacto            | 228 × 167               | ✅           |

Los enlaces de atribución dentro de los `<figcaption>` y del footer son enlaces
dentro de una frase de texto, y las pautas WCAG (criterio 2.5.8) los excluyen
del tamaño mínimo. La página no tiene desplazamiento horizontal a 375 px.
