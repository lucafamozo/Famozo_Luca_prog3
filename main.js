async function cargarCartas() {
  const contenedor = document.getElementById("cartas");
  contenedor.innerHTML = "";

  const respuesta = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=6");
  const datos = await respuesta.json();

  for (const cartaDatos of datos.cards) {
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

window.addEventListener("load", cargarCartas);