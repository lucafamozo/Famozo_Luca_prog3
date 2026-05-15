//localStorage.clear()  <---- lo estuve usando para borrar el historial de cartas guardadas, lo dejo para pruebas

window.addEventListener("load", () => {
  const contenedor = document.getElementById("cartas");
  const guardadas = JSON.parse(localStorage.getItem("cartas") || "[]");

  for (const cartaDatos of guardadas) {
    const carta = new Carta(
      cartaDatos.code,
      cartaDatos.value,
      cartaDatos.suit,
      cartaDatos.imagen,
    );
    const elemento = carta.createHtmlElement();
    contenedor.appendChild(elemento);
  }
});