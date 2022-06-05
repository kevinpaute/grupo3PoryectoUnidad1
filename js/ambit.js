const style = document.createElement('style');
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css';
style.innerHTML = `
    .card{
        display: flex;
        width: 400px;
        flex-direction: row;
        padding: 0.5rem;
    }

    .card i{
        margin-right: 1rem;
        font-size: 1.5rem;
    }
`

const contenedor = document.querySelector('.contenedor');
// contenedor.attachShadow({ mode: 'open' });

class SellButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // let t = document.querySelector('#sellButton0');
        // let instancia = t.content.cloneNode(true);
        // const shadowRoot = this.attachShadow({ mode: 'open' });
        // shadowRoot.appendChild(instancia);
        // shadowRoot.appendChild(style);
    }
}

let count = 0
const btn = document.querySelector('.btn');
console.log(btn);
btn.addEventListener("click", function () {
    console.log('click')
    let t = document.querySelector(`#ambit${count}`);
    let instancia = t.content.cloneNode(true);
    console.log(instancia)
    if (count == 0) {
        contenedor.appendChild(style)
        contenedor.appendChild(link);
    }
    contenedor.appendChild(instancia)

    count += 1
    console.log(count)

});

window.customElements.define('sell-button', SellButton);