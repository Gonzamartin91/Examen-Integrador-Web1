const cursos = [
    {
        imagen: "img/carrusel/fullstack.svg",
        alt: "Imagen sobre curso de Desarrollo Web Full Stack",
        titulo: "Desarrollo Web Full Stack",
        descripcion: "8 semanas · Nivel inicial",
        enlaceVer: "contenido.html#fullstack"
    },
    {
        imagen: "img/carrusel/ia-aplicada.svg",
        alt: "Imagen sobre Charla: IA Aplicada",
        titulo: "Charla: IA Aplicada",
        descripcion: "02/11/2026 · 10:00 hs",
        enlaceVer: "contenido.html#ia-aplicada"
    },
    {
        imagen: "img/carrusel/python-datos.svg",
        alt: "Imagen sobre curso de Análisis de datos con Phyton",
        titulo: "Análisis de datos con Phyton",
        descripcion: "10 semanas · Nivel intermedio",
        enlaceVer: "contenido.html#python-datos"
    },
    {
        imagen: "img/carrusel/testing.svg",
        alt: "Imagen sobre Charla: Testing de Software",
        titulo: "Charla: Testing de Software",
        descripcion: "06/11/2026 · 09:00 hs",
        enlaceVer: "contenido.html#testing"
    }
];

let indiceActual = 0;

const imagenCarrusel = document.getElementById("imagen-carrusel");
const tituloCarrusel = document.getElementById("titulo-carrusel");
const descripcionCarrusel = document.getElementById("descripcion-carrusel");
const botonAnterior = document.getElementById("btn-anterior");
const botonSiguiente = document.getElementById("btn-siguiente");
const enlaceVer = document.getElementById("enlace-ver");
const contenedorIndicadores = document.getElementById("indicadores-carrusel");

function crearIndicadores() {
    for(let i = 0; i < cursos.length; i++) {
        const punto = document.createElement("span");
        punto.classList.add("punto");
        contenedorIndicadores.appendChild(punto);
    }
}

function mostrarCurso() {
    const curso = cursos[indiceActual];
    imagenCarrusel.src = curso.imagen;
    imagenCarrusel.alt = curso.alt;
    tituloCarrusel.textContent = curso.titulo;
    descripcionCarrusel.textContent = curso.descripcion;
    enlaceVer.href = curso.enlaceVer;

    const puntos = contenedorIndicadores.children;
    for (let i = 0; i < puntos.length; i++) {
        if (i === indiceActual) {
            puntos[i].classList.add("activo");
        } else {
            puntos[i].classList.remove("activo");
        }
    }
}

function avanzar() {
    indiceActual++;
    if (indiceActual >= cursos.length) {
        indiceActual = 0;
    }
    mostrarCurso();
}

function retroceder() {
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = cursos.length - 1;
    }
    mostrarCurso();
}

botonSiguiente.addEventListener("click", avanzar);
botonAnterior.addEventListener("click", retroceder);

crearIndicadores();
mostrarCurso();