const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const curso  = document.getElementById("curso");
const mensaje = document.getElementById("mensaje");

const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
const regexCorreo = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
const regexTelefono = /^[0-9]{8,15}$/;

function mostrarError(campo, texto) {
    const small = document.getElementById("error-" + campo.id);
    small.textContent = texto;
    campo.classList.add("campo-invalido");
}

function limpiarError(campo) {
    const small = document.getElementById("error-" + campo.id);
    small.textContent = "";
    campo.classList.remove("campo-invalido");
}

function validarNombre(nombre) {
    const valor = nombre.value.trim();
    if (valor === "") {
        mostrarError(nombre, "El nombre es obligatorio.");
        return false;
    }
    if (valor.length < 3) {
        mostrarError(nombre, "Debe tener al menos 3 caracteres.");
        return false;
    }
    if (!regexNombre.test(valor)) {
        mostrarError(campo, "Sólo se permiten letras y espacios.")
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
        mostrarError(correo, "Ingresá un correo válido.")
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