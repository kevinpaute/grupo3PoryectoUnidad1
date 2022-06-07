//aislamiento de CSS  Shadow DOM
const div = document.querySelector('#contenedor'); // Seleccionamos el div
div.attachShadow({
    mode: 'open'
});
const style = document.createElement('style'); // Creamos un elemento style
style.innerHTML = `

                    h1 {
                        font-weight: bold;
                        margin: 0;
                    }

                    h5{
                        text-align: left;
                    }

                    p {
                        font-size: 14px;
                        font-weight: 100;
                        line-height: 20px;
                        letter-spacing: 0.5px;
                    }

                    .container {
                        background-color: #ffffff;
                        border-radius: 10px;
                        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
                                0 10px 10px rgba(0,0,0,0.22);
                        position: relative;
                        overflow: hidden;
                        margin: 0 auto;
                        margin-top: 90px;
                        width: 70%;
                        max-width: 100%;
                        min-height: 600px;
                    }

                    form {
                        background-color: #ffffff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        padding: 0 50px;
                        margin-top: 40px;
                        height: 90%;
                        text-align: center;
                    }

                    .form-container {
                        position: absolute;
                        top: 0;
                        height: 100%;
                        transition: all 0.6s ease-in-out;
                        
                    }



                    select{
                        border: none;
                        background-color: rgb(219, 219, 219);
                        width: 90%;
                        margin: 8px 0;
                        padding: 12px 15px;
                    }


                    input {
                        background-color: rgb(224, 224, 224);
                        border: none;
                        padding: 12px 15px;
                        margin: 5px;
                        width: 90%;
                    }

                    label{
                        font-size: 13px;
                        text-align: left;
                        justify-content: left;
                    }

                    button {   
                        border-radius: 20px;
                        border: 1px solid rgb(0, 0, 0);
                        background-color: #181818;
                        color: #FFFFFF;
                        font-size: 12px;
                        font-weight: bold;
                        padding: 5px;
                        margin-top: 20px;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        transition: transform 80ms ease-in;
                        width: 90%;
                        line-height: 30px;
                        justify-content: center;
                    }

                    .entrar_L{
                        text-decoration: none;
                        color: white;
                    }
                    button:active {
                        transform: scale(0.95);
                    }

                    button:focus {
                        outline: none;
                    }

                    button.ghost {
                        background-color: transparent;
                        border-color: #FFFFFF;
                    }


                    #regresar{
                        background-color: rgb(3, 3, 3);
                        border: 1px solid rgb(3, 3, 3);
                        padding: 7px;
                        display: flex;
                        width: 100%;
                    }

                    #regresar a{
                        text-decoration: none;
                        color: white;
                    }

                    .iniciar-container {
                        left: 0;
                        width: 50%;
                        z-index: 2;
                    }

                    .crear-container {
                        left: 0;
                        width: 50%;
                        opacity: 0;
                        z-index: 1;
                    }

                    .container.right-panel-active .iniciar-container {
                        transform: translateX(100%);
                    }


                    .container.right-panel-active .crear-container {
                        transform: translateX(100%);
                        opacity: 1;
                        z-index: 5;
                        animation: show 0.6s;
                    }

                    @keyframes show {
                        0%, 49.99% {
                            opacity: 0;
                            z-index: 1;
                        }
                        
                        50%, 100% {
                            opacity: 1;
                            z-index: 5;
                        }
                    }

                    .overlay-container {
                        position: absolute;
                        top: 0;
                        left: 50%;
                        width: 50%;
                        height: 100%;
                        overflow: hidden;
                        transition: transform 0.6s ease-in-out;
                        z-index: 100;
                    }

                    .overlay {
                        background: #398bd8;
                        background: -webkit-linear-gradient(to right, #3b9cdd, #3b73b3);
                        background: linear-gradient(to right, #5da2c2, #184466);
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: 0 0;
                        color: #000000;
                        position: relative;
                        left: -100%;
                        height: 100%;
                        width: 200%;
                        transform: translateX(0);
                        transition: transform 0.6s ease-in-out;
                    }

                    .overlay-panel {
                        position: absolute;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        
                    
                        text-align: center;
                        top: 0;
                        height: 100%;
                        width: 50%;
                        transform: translateX(0);
                        transition: transform 0.6s ease-in-out;
                    }

                    .container.right-panel-active .overlay-container{
                        transform: translateX(-100%);
                    }


                    .container.right-panel-active .overlay {
                        transform: translateX(50%);
                    }

                    .overlay-left {
                        transform: translateX(-20%);
                    }

                    .overlay-right {
                        right: 0;
                        transform: translateX(0);
                    }

                    .container.right-panel-active .overlay-left {
                        transform: translateX(0);
                    }

                    .container.right-panel-active .overlay-right {
                        transform: translateX(20%);
                    }

                    .tyb{
                        width: 100%;
                    }
`;



class login extends HTMLElement {
    //Aqui va el código del elemento del web component
    constructor() { // Constructor de la clase 
        super(); // Llamada al constructor de la clase padre
    }

    connectedCallback() {
        const section = document.createElement('section');
        section.innerHTML = `

            <div class="container" id="container">
            <div class="form-container crear-container">
                <form  >
                    <h1>Crear Cuenta</h1>
                    <h4>Ingrese los datos para crear tu cuenta</h4>
                    <div id="Layer1" style="width:100%;  overflow-y: scroll; scrollbar-base-color:aqua;">
                        <input type="text" name="cedula" placeholder="Cedula" required="">
                        <input type="text" name="username" placeholder="Nombres" required="">
                        <input type="text" name="lastname" placeholder="Apellido paterno" required="">
                        <input type="text" name="lastname2" placeholder="Apellido materno (Opcional)" >
                        <input type="email" name="email" placeholder="Correo (Opcional)" >
                        
                        <input type="date" name="fecha" placeholder="Fecha de nacimiento" required="">
                        <input type="text" name="edad" placeholder="Edad" required="">
                        <input type="text" name="telefono" placeholder="Telefono" required="">
                        <input type="text" name="ciudad" placeholder="Ciudad" required="">
                        <input type="text" name="direccion" placeholder="Direccion" required=""> 
                        <label>Añadir foto (Opcional)</label>
                        <input type="file" name="foto" placeholder="Foto"> 

                        <label>Datos para iniciar sesión</label>
                        <input type="text" name="user" placeholder="Genere usuario" required="">
                        <input type="password" name="password" placeholder="Contraseña" required="">
                    </div>
                    <button type="submit" name="register" value="register">Registrar</button>
                </form>
            </div>
            <div class="form-container iniciar-container">
                <form action="login.php" method="post" >
                    
                    <h1>Iniciar Sesión</h1>
                    
                    <input type="text" name="user" id="user"  placeholder="Usuario">
                    <input type="password" name="password" id="password"  placeholder="Contraseña">
                    
                    <button type="submit" name="login" value="login">Entrar</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>¡Bienvenido!</h1>
                        <p>Inicie sesión con su información personal</p>
                        <button class="ghost" id="iniciarS">Iniciar Sesión</button>
                    </div>

                    <div class="overlay-panel overlay-right">
                        <h1>¡Regístrese ahora!</h1>
                        <p>Ingrese sus datos personales y comience una nueva vida <br>con la mejor atención médica</p>
                        <button class="ghost" id="registro">Registrarse</button>
                    </div>
                </div>
            </div>

        </div>
    `;

        div.shadowRoot.appendChild(section); // Agrega el elemento al shadow DOM
        div.shadowRoot.appendChild(style); // Agrega el estilo al shadow DOM

        // Seleccionamos el boton de registro del shadowRoot del elemento y 
        //lo guardamos en una variable para poder usarlo mas adelante en el evento click
        this.button = div.shadowRoot.querySelector('#registro');
        // Evento click del boton de registro  y llamamos a la funcion registro  
        this.button.onclick = () => this.registro();
        this.button = div.shadowRoot.querySelector('#iniciarS'); //boton de iniciar sesion de usuario
        this.button.onclick = () => this.iniciarS(); //funcion de iniciar sesion de usuario

    }

    registro() { //funcion de registro de usuario
        //mostrar right-panel-active en el shadow  de la pagina
        div.shadowRoot.querySelector('.container').classList.add('right-panel-active');
        //toggle para mostrar el panel derecho de la pagina  

    }

    iniciarS() { //funcion de iniciar sesion de usuario
        div.shadowRoot.querySelector('.container').classList.toggle('right-panel-active');
        //toggle para mostrar el panel izquierdo de la pagina
    }

}

window.customElements.define('login-component', login);