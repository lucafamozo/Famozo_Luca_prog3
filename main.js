let historial = [];
let paginaActual = [];

async function cargarCartas() {
  const contenedor = document.getElementById("cartas");
  contenedor.innerHTML = "";

  const respuesta = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=6");
  const datos = await respuesta.json();
  paginaActual = datos.cards;

  for (const cartaDatos of paginaActual) {
    const carta = new Carta(
      cartaDatos.code,
      cartaDatos.value,
      cartaDatos.suit,
      cartaDatos.image,
    );
    const elemento = carta.createHtmlElement();
    contenedor.appendChild(elemento);
  }
}

async function paginaSiguiente() {
  historial.push(paginaActual);
  await cargarCartas();
}

async function paginaAnterior() {
  if (historial.length > 0) {
    const contenedor = document.getElementById("cartas");
    contenedor.innerHTML = "";
    paginaActual = historial.pop();

    for (const cartaDatos of paginaActual) {
      const carta = new Carta(
        cartaDatos.code,
        cartaDatos.value,
        cartaDatos.suit,
        cartaDatos.image,
      );
      contenedor.appendChild(carta.createHtmlElement());
    }
  }
}

window.addEventListener("load", cargarCartas);
document.getElementById("siguiente").addEventListener("click", paginaSiguiente);
document.getElementById("anterior").addEventListener("click", paginaAnterior);