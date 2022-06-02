class pago extends HTMLElement {
    //Aqui va el código del elemento del web component
    constructor() {
        super();
    }
    connectedCallback() {
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
    <div class="container" id="container">
        
        <div class="form-container crear-container">
            <form>
                <h3>Depósito/Transferencia Bancaria</h3>
                <input type="text" name="username" placeholder="Nombres" required="">
                <input type="email" name="email" placeholder="Ingrese su correo" required="">  
                <select>
                    <option disabled="disabled" selected="">Banco donde realizó el depósito </option>
                    <option>Banco Pichincha</option>
                    <option>Banco Internacional</option>
                    <option>Banco de Guayaquil</option>
                    <option>Banco del Pacífico</option>
                </select>
                <input type="text" name="referencia" placeholder="Número de referencia" required="">
                <input type="number" name="valor" type="number" min="0.00" max="10000.00" step="0.01" placeholder="Valor del depósito">   
                <input type="text" name="ruc" placeholder="Cédula/RUC" required="">
                <input type="text" name="telephone" placeholder="Telefono" required="">
                <label>Adjuntar depósito (pdf, png, jpg)</label>
                <input type="file" name="file" placeholder="Archivo pdf" required="">
                <button type="submit" name="pagar" value="pagar">Pagar</button>
            </form>
            <a href=""><buttom type="submit">Ver formas de pago</buttom></a>
            <a href="index.html"><button type="clear" id="apple">Regresar</button></a>
        </div>
    <div class="form-container iniciar-container">

            <form action="index.html" target="_blank">
                <div id="smart-button-container">
                    <div ><label for="description">Descripcion del pago: </label><input type="text" name="descriptionInput" id="description" maxlength="127" value="" placeholder="Descripción"></div>
                      <p id="descriptionError" style="visibility: hidden; color:red; text-align: center;">Por favor ingrese una descripción</p>
                    <div ><label for="amount" >Ingrese valor a pagar: </label><input name="amountInput" type="number" id="amount" value=""  placeholder="USD"></div>
                      <p id="priceLabelError" style="visibility: hidden; color:red; text-align: center;">Por favor ingrese un precio</p>
                    <div id="invoiceidDiv" style="text-align: center; display: none;"><label for="invoiceid"> </label><input name="invoiceid" maxlength="127" type="text" id="invoiceid" value="" ></div>
                      <p id="invoiceidError" style="visibility: hidden; color:red; text-align: center;">Por favor ingrese un Invoice ID</p>
                    <div style="text-align: center; margin-top: 0.625rem;" id="paypal-button-container"></div>
                      
                </div>
               <button type="clear" id="regresar"> <a href="index.html">Regresar</a></button>
            </form>  
           
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>¡Pague fácil y ágil en línea!</h1>
                    <p>Realizar pago con tarjeta de crédito/débito</p>
                    <button class="ghost" id="iniciarS">Pago Crédito/Débito</button>
                </div>

                <div class="overlay-panel overlay-right">
                    <h1>¡Bienvenido al Portal de pago!</h1>
                    <p>Realizar pago mediante depósito o transferencia bancaria</p>
                    <button class="ghost" id="registro">Pago Bancario</button>
                </div>
            </div>
        </div>
    </div>
    `;

    }
}

window.customElements.define('pago-component', pago);
