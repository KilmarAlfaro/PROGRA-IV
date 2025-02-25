
class OtroElemento extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
        <style>
            p {
                color: black;
                font-size: 20px;
                text-align: center;
                margin-top: 20px;
                font-weight: bold;
            }
        </style>
        <p>PARA OBTENER MÁS INFORMACIÓN CLICKEA LAS IMÁGENES</p>
        `;
    }
}
customElements.define("mi-elemento", OtroElemento);


class MiComponente extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        const texto = this.getAttribute("texto") || "Texto por defecto";
        this.shadowRoot.innerHTML = `
        <style>
            p {
                color: black;
                font-size: 18px;
                text-align: center;
                margin-top: 10px;
                font-weight: bold;
            }
        </style>
        <p>${texto}</p>
        `;
    }
}
customElements.define("mi-componente", MiComponente);




document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sunset").addEventListener("click", function() {
        alert("Ubicado en el Puerto de La Libertad, conocido como la puerta de entrada a Surf City, este lugar es perfecto para comenzar o terminar un día de playa.");
    });

    document.getElementById("binaes").addEventListener("dblclick", function() {
        alert("La Biblioteca Nacional de El Salvador o simplemente BINAES es una institución pública nacional en El Salvador, fue reconstruida por el Gobierno de El Salvador con la cooperación del Gobierno de la República Popular China el 14 de noviembre de 2023.");
    });
});

