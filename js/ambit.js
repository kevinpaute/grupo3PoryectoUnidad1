const style = document.createElement('style');
const link = document.createElement('link');
// import  div  from './template'

link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css';
style.innerHTML = `
    .card{
        display: flex;
        width: 300px;
        flex-direction: row;
        padding: 0.5rem;
    }

    .card i{
        margin-right: 1rem;
        font-size: 1.5rem;
    }
`

const contenedor = document.querySelector('.contenedor');
// const ultimo = document.querySelector('.ultimo');
// ultimo.appendChild(div);
contenedor.attachShadow({ mode: 'open' });

let count = 0
const btn = document.querySelector('.btn');
console.log(btn);
btn.addEventListener("click", function () {
    console.log('click')
    if (count < 9) {
        let t = document.querySelector(`#ambit${count}`);
        let instancia = t.content.cloneNode(true);
        console.log(instancia)
        if (count == 0) {
            contenedor.shadowRoot.appendChild(style)
            contenedor.shadowRoot.appendChild(link);
        }
        contenedor.shadowRoot.appendChild(instancia)
    }

    count += 1
    console.log(count)

});
