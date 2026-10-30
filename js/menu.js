const botonMenu = document.getElementById("menu-boton");
const menu = document.getElementById("menu-principal");

botonMenu.addEventListener("click", function () {
  menu.classList.toggle("abierto");

  const estaAbierto = menu.classList.contains("abierto");

  botonMenu.setAttribute("aria-expanded", estaAbierto);
  botonMenu.setAttribute(
    "aria-label",
    estaAbierto ? "Cerrar menú" : "Abrir menú",
  );
  botonMenu.textContent = estaAbierto ? "✕" : "☰";
});
