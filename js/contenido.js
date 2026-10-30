const tarjetas = document.querySelectorAll(".tarjeta-mini");

/* Cada tarjeta de curso o charla lleva al formulario de inscripción al hacer clic */
tarjetas.forEach(function (tarjeta) {
  tarjeta.addEventListener("click", function () {
    location.href = "contacto.html";
  });
});
