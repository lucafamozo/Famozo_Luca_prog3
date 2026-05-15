class Carta {
    code;
    value;
    suit;
    imagen;
     constructor (code, value, suit, imagen) {
        this.code = code;
        this.value = value;
        this.suit = suit;
        this.imagen = imagen;
     }

     toJsonString() {
        return JSON.stringify(this);
    }

    static  createFromJsonString(json) {
        const datos = JSON.parse(json);
        return new Carta(datos.code, datos.value, datos.suit, datos.imagen); 
    }
    createHtmlElement() {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");

        const link = document.createElement("a");
        link.href = this.imagen;
        link.target = "_blank";
        link.appendChild(img);

        img.src = this.imagen;
        h3.textContent = this.code;
        p.textContent = this.suit + " - " + this.value;

        const boton = document.createElement("button");
        boton.textContent = "guardar";
        boton.addEventListener("click", () => Carta.guardarCarta(this));

        div.appendChild(link);
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(boton);

        return div;
    }

    static guardarCarta(carta) {
        const guardadas = JSON.parse(localStorage.getItem("cartas") || "[]");
        
        // recorre el array y devuelve true si ya existe una carta con el mismo code
        const yaExiste = guardadas.some(c => c.code === carta.code);
        if (!yaExiste) {
            guardadas.push(JSON.parse(carta.toJsonString()));
            localStorage.setItem("cartas", JSON.stringify(guardadas));
        }
    }
}