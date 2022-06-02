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
    </div>
    `;

    }
}

window.customElements.define('pago-component', pago);
