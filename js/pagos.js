//aislamiento de CSS  Shadow DOM


// const div = document.querySelector('#contenedor'); // Seleccionamos el div
// div.attachShadow({mode: 'open'});




class pago extends HTMLElement {
    //Aqui va el código del elemento del web component
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }


      

    connectedCallback() {
        this.shadowRoot.innerHTML = `

    <div class="container" id="container">
    <div class="form-container crear-container">
        <form>
            <h1>Crear Cuenta</h1>
            <h4>Ingrese los datos para crear tu cuenta</h4>
            <label>Tipo de usuario</label>
            <select>   
                <option disabled="disabled" selected>Seleccionar</option> 
                <option>Paciente</option>
                <option>Médico</option>
            </select>              
            <input type="email" name="email" placeholder="Correo" required="">
            <input type="password" name="password" placeholder="Contraseña" required="">
            
            <label>Datos</label>
            <input type="text" name="username" placeholder="Nombre" required="">
            <input type="text" name="lastname" placeholder="Apellido" required="">
            <input type="text" name="city" placeholder="Ciudad" required="">
            <input type="text" name="telephone" placeholder="Telefono" required="">
            <button type="submit" name="register" value="register">Registrar</button>
        </form>
    </div>
    <div class="form-container iniciar-container">
        <form action="index.html" target="_blank">
            
            <h1>Iniciar Sesión</h1>
            
            <input type="email" name="email" placeholder="Correo">
            <input type="password" name="password" placeholder="Contraseña">
            
            <button type="submit"   name="login" value="login">Entrar</button>
            <br>                    
        </form>
    </div>
    <div class="overlay-container">
        <div class="overlay">
            <div class="overlay-panel overlay-left">
                <h1>¡Bienvenido!</h1>
                <p>Inicie sesión con su información personal</p>
                <button class="ghost" onclick="iniciarSesion()" id="iniciarS">Iniciar Sesión</button>
            </div>

            <div class="overlay-panel overlay-right">
                <h1>¡Regístrese ahora!</h1>
                <p>Ingrese sus datos personales y comience una nueva vida con los mejores precios del año</p>
                <button class="ghost"  id="registro">Registrarse</button>
            </div>
        </div>
    </div>
    
</div>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
    box-sizing: border-box;
}

body {
    background: #ffe7c7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    margin: -20px 0 50px;
}

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
    margin: 20px 0 30px;
}

.container {
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
            0 10px 10px rgba(0,0,0,0.22);
    position: relative;
    overflow: hidden;
    margin-top: 30px;
    width: 835px;
    max-width: 100%;
    min-height: 585px;
}

form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
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
    width: 100%;
    margin: 8px 0;
    padding: 12px 15px;
}


input {
    background-color: rgb(219, 219, 219);
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
}

label{
    font-size: 13px;
    text-align: left;
    justify-content: left;
}

button {   
    border-radius: 20px;
    border: 1px solid #ff672b;
    background-color: #FF4B2B;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    width: 100%;
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


#facebook{
    background-color: rgb(2, 83, 204);
    border: 1px solid rgb(2, 83, 204);
    padding: 9px;
    display: flex;
}

#google{
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(167, 167, 167);
    padding: 7px;
    color: black;
    display: flex;
}

#apple{
    background-color: rgb(3, 3, 3);
    border: 1px solid rgb(3, 3, 3);
    padding: 7px;
    display: flex;
}

#img{
    margin-left: 10px;
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
    background: #ffb341;
    background: -webkit-linear-gradient(to right, #f78b25, #fd7536);
    background: linear-gradient(to right, #f39e30, #fd6e2c);
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
    padding: 0 40px;
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

</style>

    `;

    this.button = this.shadowRoot.querySelector('#registro');
    this.button.onclick = () => this.registro();
    //mostrar right-panel-active

    

    }

    registro() {
        this.shadowRoot.querySelector('.container').classList.toggle('right-panel-active');

        //arroja error
        


    }

    disconnectedCallback() {
        this.button.onclick = null;
    }




}




window.customElements.define('pago-component', pago);




