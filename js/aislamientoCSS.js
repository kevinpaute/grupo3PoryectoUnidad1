const div = document.querySelector('#login'); // Seleccionamos el div
div.attachShadow({mode: 'open'});
const style = document.createElement('style');
style.textContent = `
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

    * {
        box-sizing: border-box;
    }

    body {
        background: url("img/imagen2.jpg");
        background-position: center;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: 'Montserrat', sans-serif;
        margin: -20px 0 50px;
        }
`;
div.shadowRoot.appendChild(style);


