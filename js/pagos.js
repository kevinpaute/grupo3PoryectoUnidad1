

class pago extends HTMLElement {
    //Aqui va el código del elemento del web component
    constructor() {
        super();
    }
    connectedCallback() {
        let shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.innerHTML = `

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
            
            <button type="submit" name="login" value="login">Entrar</button>
            <br>                    
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
                <p>Ingrese sus datos personales y comience una nueva vida con los mejores precios del año</p>
                <button class="ghost" id="registro">Registrarse</button>
            </div>
        </div>
    </div>
</div>
    `;

    }
}

window.customElements.define('pago-component', pago);