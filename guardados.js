//localStorage.clear()  <---- lo estuve usando para borrar el historial de cartas guardadas, lo dejo para pruebas

let guardadas = [];

function mostrarCartas() {
  const contenedor = document.getElementById("cartas");
  contenedor.innerHTML = "";

  for (const cartaDatos of guardadas) {
    const carta = new Carta(
      cartaDatos.code,
      cartaDatos.value,
      cartaDatos.suit,
      cartaDatos.imagen,
    );
    contenedor.appendChild(carta.createHtmlElement());
  }
}

window.addEventListener("load", () => {
  guardadas = JSON.parse(localStorage.getItem("cartas") || "[]");
  mostrarCartas();

  document.getElementById("ordenarSuit").addEventListener("click", () => {
    guardadas.sort((a, b) => a.suit.localeCompare(b.suit));
    mostrarCartas();
  });


  // uso un array "orden" porque el valor de las cartas de póker no son en orden alfabético, ni tampoco completamente numérico
  document.getElementById("ordenarValue").addEventListener("click", () => {
    const orden = ["ACE", "2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING"];
    guardadas.sort((a, b) => orden.indexOf(a.value) - orden.indexOf(b.value));
    mostrarCartas();
  });
});