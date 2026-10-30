const botonMenu = document.getElementById("menu-boton");
const menu = document.getElementById("menu-principal");

/* Botón ☰ (visible solo en mobile): abre o cierra el menú agregando o quitando la clase "abierto" */
botonMenu.addEventListener("click", function () {
  menu.classList.toggle("abierto");

  const estaAbierto = menu.classList.contains("abierto");

  /* Actualiza la accesibilidad y el ícono según el estado: ✕ para cerrar y ☰ para abrir */
  botonMenu.setAttribute("aria-expanded", estaAbierto);
  botonMenu.setAttribute(
    "aria-label",
    estaAbierto ? "Cerrar menú" : "Abrir menú",
  );
  botonMenu.textContent = estaAbierto ? "✕" : "☰";
});
