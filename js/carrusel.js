/* Datos del carrusel: cada objeto es un curso o charla. Para agregar uno nuevo alcanza con sumar un objeto al array, sin modificar el HTML */
const cursos = [
  {
    imagen: "img/carrusel/fullstack.svg",
    alt: "Imagen sobre curso de Desarrollo Web - Full Stack",
    titulo: "Desarrollo Web - Full Stack",
    descripcion: "8 semanas · Nivel inicial",
    etiqueta: "DESTACADO",
    enlaceVer: "contenido.html#fullstack",
  },
  {
    imagen: "img/carrusel/ia-aplicada.svg",
    alt: "Imagen sobre charla de IA aplicada",
    titulo: "Charla: IA aplicada",
    descripcion: "02/11/2026 · 10:00 hs.",
    enlaceVer: "contenido.html#ia-aplicada",
  },
  {
    imagen: "img/carrusel/python-datos.svg",
    alt: "Imagen sobre curso de Análisis de datos con Python",
    titulo: "Análisis de datos con Python",
    descripcion: "10 semanas · Nivel intermedio",
    enlaceVer: "contenido.html#python-datos",
  },
  {
    imagen: "img/carrusel/testing.svg",
    alt: "Imagen sobre charla de Testing de software",
    titulo: "Charla: Testing de software",
    descripcion: "06/11/2026 · 09:00 hs.",
    etiqueta: "ÚLTIMOS CUPOS",
    enlaceVer: "contenido.html#testing",
  },
];

/* Posición del curso que se está mostrando (0 = el primero del array) */
let indiceActual = 0;

/* Elementos del HTML que el carrusel modifica */
const imagenCarrusel = document.getElementById("imagen-carrusel");
const tituloCarrusel = document.getElementById("titulo-carrusel");
const descripcionCarrusel = document.getElementById("descripcion-carrusel");
const etiqueta = document.getElementById("carrusel-etiqueta");
const botonAnterior = document.getElementById("btn-anterior");
const botonSiguiente = document.getElementById("btn-siguiente");
const enlaceVer = document.getElementById("enlace-ver");
const contenedorIndicadores = document.getElementById("indicadores-carrusel");

/* Crea con createElement() un punto indicador por cada curso del array */
function crearIndicadores() {
  for (let i = 0; i < cursos.length; i++) {
    const punto = document.createElement("span");
    punto.classList.add("punto");
    contenedorIndicadores.appendChild(punto);
  }
}

/* Muestra el curso de la posición indiceActual: actualiza imagen, texto alternativo, título, descripción y enlace del botón VER */
function mostrarCurso() {
    const curso = cursos[indiceActual];
    imagenCarrusel.src = curso.imagen;
    imagenCarrusel.alt = curso.alt;
    tituloCarrusel.textContent = curso.titulo;
    descripcionCarrusel.textContent = curso.descripcion;
    enlaceVer.href = curso.enlaceVer;
    
    /* La etiqueta (DESTACADO, ÚLTIMOS CUPOS) se muestra solo si el curso la tiene; si no, se oculta con la clase "oculto" */
    if (curso.etiqueta) {
        etiqueta.textContent = curso.etiqueta;
        etiqueta.classList.remove("oculto");
    } else {
        etiqueta.classList.add("oculto");
    }
    
    /* Marca como activo solo el punto que corresponde al curso visible */
    const puntos = contenedorIndicadores.children;
    for (let i = 0; i < puntos.length; i++) {
        if (i === indiceActual) {
            puntos[i].classList.add("activo");
        } else {
            puntos[i].classList.remove("activo");
        }
    }
}

/* Avanza al curso siguiente. Si el índice llega a cursos.length (se pasó del último), vuelve al primero (0): así el carrusel es circular */
function avanzar() {
  indiceActual++;
  if (indiceActual >= cursos.length) {
    indiceActual = 0;
  }
  mostrarCurso();
}

/* Retrocede al curso anterior. Si el índice queda en menos de 0, va al último (cursos.length - 1): así el carrusel es
circular */
function retroceder() {
  indiceActual--;
  if (indiceActual < 0) {
    indiceActual = cursos.length - 1;
  }
  mostrarCurso();
}

/* Cada botón ejecuta su función al hacer clic */
botonSiguiente.addEventListener("click", avanzar);
botonAnterior.addEventListener("click", retroceder);

/* Al cargar la página: se crean los puntos indicadores y se muestra el primer curso */
crearIndicadores();
mostrarCurso();
