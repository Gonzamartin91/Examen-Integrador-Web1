/* Elementos del formulario que se validan y contenedor donde se muestra el resumen */
const formulario = document.getElementById("form-contacto");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const curso = document.getElementById("curso");
const mensaje = document.getElementById("mensaje");
const respuesta = document.getElementById("mensaje-respuesta");


/* Nombre: solo letras (incluye tildes, ñ y ü) y espacios */
const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;

/* Correo: texto sin espacios ni @, una @, el dominio, un punto y al menos 2 letras al final */
const regexCorreo = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

/* Teléfono: un + opcional al inicio y entre 8 y 15 dígitos */
const regexTelefono = /^\+?[0-9]{8,15}$/;


/* Muestra el error debajo del campo y lo marca en rojo. Encuentra el mensaje armando su id: "error-" + id del campo (ej.: error-nombre) */
function mostrarError(campo, texto) {
  const small = document.getElementById("error-" + campo.id);
  small.textContent = texto;
  campo.classList.add("campo-invalido");
}

/* Borra el mensaje de error y quita el borde rojo */
function limpiarError(campo) {
  const small = document.getElementById("error-" + campo.id);
  small.textContent = "";
  campo.classList.remove("campo-invalido");
}


/* Validaciones: cada función devuelve true si el campo es válido o false si muestra un error. Primero revisa que no esté vacío, después la longitud y por último el formato */

function validarNombre() {
  const valor = nombre.value.trim();
  if (valor === "") {
    mostrarError(nombre, "El nombre y apellido es obligatorio.");
    return false;
  }
  if (valor.length < 3) {
    mostrarError(nombre, "Debe tener al menos 3 caracteres.");
    return false;
  }
  if (!regexNombre.test(valor)) {
    mostrarError(nombre, "Sólo se permiten letras y espacios.");
    return false;
  }
  limpiarError(nombre);
  return true;
}

function validarCorreo() {
  const valor = correo.value.trim();
  if (valor === "") {
    mostrarError(correo, "El correo es obligatorio.");
    return false;
  }
  if (!regexCorreo.test(valor)) {
    mostrarError(correo, "Ingresá un correo válido.");
    return false;
  }
  limpiarError(correo);
  return true;
}

function validarTelefono() {
  const valor = telefono.value.trim();
  if (valor === "") {
    mostrarError(telefono, "El teléfono es obligatorio.");
    return false;
  }
  if (!regexTelefono.test(valor)) {
    mostrarError(telefono, "Sólo números, entre 8 y 15 dígitos.");
    return false;
  }
  limpiarError(telefono);
  return true;
}

function validarCurso() {
  if (curso.value === "") {
    mostrarError(curso, "Elegí un curso o charla.");
    return false;
  }
  limpiarError(curso);
  return true;
}

function validarMensaje() {
  const valor = mensaje.value.trim();
  if (valor === "") {
    mostrarError(mensaje, "La consulta es obligatoria.");
    return false;
  }
  if (valor.length < 10) {
    mostrarError(mensaje, "Escribí al menos 10 caracteres.");
    return false;
  }
  limpiarError(mensaje);
  return true;
}

/* Validación en vivo: cada campo se revisa mientras se escribe (input) o al elegir una opción (change) */
nombre.addEventListener("input", validarNombre);
correo.addEventListener("input", validarCorreo);
telefono.addEventListener("input", validarTelefono);
curso.addEventListener("change", validarCurso);
mensaje.addEventListener("input", validarMensaje);

/* Al enviar: preventDefault() impide el envío tradicional, que recargaría la página */
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  /* Se guardan las 5 validaciones en variables en lugar de unirlas con &&: así se ejecutan todas y se muestran todos los errores a la vez */
  const nombreOk = validarNombre();
  const correoOk = validarCorreo();
  const telefonoOk = validarTelefono();
  const cursoOk = validarCurso();
  const mensajeOk = validarMensaje();

  /* Si todo es válido: se muestra el resumen y se vacía el formulario para un nuevo envío */
  if (nombreOk && correoOk && telefonoOk && cursoOk && mensajeOk) {
    mostrarResumen();
    formulario.reset();
  } else {
    respuesta.textContent = "";
  }
});

/* Crea el resumen con createElement() y lo agrega a la página. Usa textContent para que lo que escribió el usuario nunca se interprete como HTML */
function mostrarResumen() {
  const cursoElegido = curso.options[curso.selectedIndex].text;

  /* trim() quita los espacios de los bordes y replace(/\s+/g, " ") deja un solo espacio entre palabras */
  const nombreLimpio = nombre.value.trim().replace(/\s+/g, " ");

  /* Borra el resumen anterior para que no se acumulen al enviar varias veces */
  respuesta.textContent = "";

  const caja = document.createElement("div");
  caja.classList.add("confirmacion");

  const titulo = document.createElement("h2");
  titulo.textContent =
    "¡Gracias, " + nombreLimpio + "! Tu pre-inscripción fue registrada.";

  const lista = document.createElement("ul");
  const datos = [
    "Nombre: " + nombreLimpio,
    "Correo: " + correo.value.trim(),
    "Teléfono: " + telefono.value.trim(),
    "Curso o charla: " + cursoElegido,
    "Consulta: " + mensaje.value.trim(),
  ];
  datos.forEach(function (dato) {
    const item = document.createElement("li");
    item.textContent = dato;
    lista.appendChild(item);
  });

  caja.appendChild(titulo);
  caja.appendChild(lista);
  respuesta.appendChild(caja);
}
