const div = document.querySelector('#contect-1'); // Seleccionamos el div

div.attachShadow({
    mode: 'open'
});

const style = document.createElement('style'); // Creamos el elemento style
style.innerHTML =
    `main {
        width: 75%;
        margin: 20px auto;
        border: 1px solid rgba(10, 104, 10, 0.438);
        border-radius: 10px;
        padding: 10px;
    }
    
    main div table tr td {
        cursor: pointer;
        transition: 0.3s all linear;
    }
    
    main div table tr td:hover {
        font-size: 18px;
    }
    
    .contect-1 {
        width: 95%;
        margin: 20px auto;
        border: 1px solid rgb(9, 85, 121);
        border-radius: 10px;
        padding: 10px;
    }
    
    .contect-1 table tr td {
        width: 25%;
    }
    
    .contect-1 table {
        padding: 0 10px;
    }
    
    .contect-1 table,
    table tr {
        border: 1px solid rgb(9, 85, 121);
        top: 0;
        top: 0;
    }
    
    .contect-1 table tr td i {
        /* display: inline-block; */
        font-size: 4rem;
        margin-right: 1rem;
        color: rgb(4, 80, 167);
    }
    .contect-1 table tr td {
        font-size: 1rem;
    }
    
    .contect-1 h1 {
        font-size: 1.2rem;
    }
    
    .contect-1 h1,
    #ruta {
        /* margin: 10px 0; */
        display: block;
        border-bottom: 2.4px solid rgb(9, 85, 121);
        height: 50px;
    }
    
    #t-cal-unidad {
        width: 50%;
    }
    #t-cal-unidad table,
    #t-biblio-unidad table {
        width: 100%;
    }
    ul {
        list-style: none;
    }
    
    .contacto {
        border-top: 1px solid rgb(9, 85, 121);
        border-bottom: 1px solid rgb(9, 85, 121);
        margin: 2rem 0;
        padding: 10px 0;
    }
        `;



class contenido extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const table = document.createElement('table');

        const section1 = document.createElement('tr');
        const section2 = document.createElement('tr');
        const section3 = document.createElement('tr');

        table.classList.add('unidad-table');

        section1.classList.add('conSpace');
        section2.classList.add('conSpace');
        section3.classList.add('conSpace');

        section1.innerHTML = `
            <td rowspan="2">
                <div>
                <i class="fa-solid fa-address-card"></i>
                    <strong>Socios clave </strong>
                    <p>Posibles contrato con grandes proveedores tnato de medicina como de equipo medico, estos
                        insumos medicos seran importados y seran de gran beneficio para los clientes.</p>
                </div>
                <div>

                </div>
            </td>
            <td>
                <div>
                <i class="fa-solid fa-address-card"></i>
                    <strong>Actividades Clave</strong>
                    <p>Servicios clinicos y hospitalarios de excelencia, tanto en las areas de tratatameinto,
                        cirugía, rehabilitación, farmacología, entre otras ramas</p>
                    <p>Ademas de una buena atención al cliente y un seguiemiento especial</p>
                </div>

            </td>
            <td>
                <div>
                    <i class="fas fa-user-md"></i>
                    <strong>Propuesta de Valor</strong>
                    <p>Ofrecer tratameinto Clinicos con calidad, eficiencia y estética. Seimpre viendo por la
                        experiencia del paciente</p>
                    <p>Uilización de materiales de ultima punto como la proxima importación de nuevos equipos para
                        un
                        mejro tratameitno a los pacientes</p>
                    <p>Grandes proyecciones a niveles economicos y de vienes social, todo con costos accesibles</p>
                </div>
            </td>
            <td>
                <div>
                    <i class="far fa-smile-beam"></i>
                    <strong>Relación con Clientes</strong>
                    <p>El trato como la relación siempre son cordiales y directa</p>
                    <p>Asistencia personalizada</p>
                    <p>Conversaciones constantes con nuestros profesionales por medio de whatsapp</p>
                </div>
            </td>`;

        section2.innerHTML = `
            <td>
                <div>
                    <i class="fas fa-suitcase"></i>
                    <strong>Recursos Clave</strong>
                    <p>Localización (Clinica completa, área de recepción, sala de espera, área clinica, área clínica
                        y de esterilización, oficinas, baños, entre otras cosas)</p>
                    <p>Equipo medico de punta</p>
                    <p>Personal etico, constante y muy profesionales</p>
                </div>
            </td>
            <td>
                <div>
                    <i class="fas fa-people-arrows"></i>
                    <strong>Canales</strong>
                    <p>Publicidad por todas la plataformas disponibles</p>
                    <p>Folletos</p>
                    <p>Hasta un poco de Marketing Digital y Fisico</p>
                </div>
            </td>
            <td>
                <div>
                    <i class="fas fa-user-ninja"></i>
                    <strong>Segmentos de Clientes</strong>
                    <p>No tenemos ninguna distinción o preferencia, es toda la población desde bebes hasta los
                        adultos mayores</p>
                </div>
            </td>`;

        section3.innerHTML = `
            <td colspan="2">
                <div>
                    <i class="fas fa-file-invoice-dollar"></i>
                    <strong>Estructura de Costos</strong>
                    <p>Costos fijos <br> Costos directo: Desde la materia prima hasta por la utilización de ciertos
                        materiales o personal en el periodo de un tratamiento especifico </p>
                    <p>Gestion de nuestra bases de datos</p>
                    <p>Además de servicios basicos que genera el consultorio como luz, internet y agua</p>
                </div>
            </td>

            <td colspan="2">
                <div>
                    <i class="fas fa-search-dollar"></i>
                    <strong>Fuentes de Ingresos</strong>
                    <p>Principalmente la venta del servicio como tal <br>
                        Son pagos únicos o recurrente (mensuales) que se pueden aceptar <br>
                        Ademas de que nosotros manejamos lo que son cuotas y un plus sin duda son la atención por
                        medio de suguros privados</p>
                </div>
            </td>
        `;
        table.appendChild(section1)
        table.appendChild(section2)
        table.appendChild(section3)

        div.shadowRoot.appendChild(table);
        div.shadowRoot.appendChild(style);

    }


}


window.customElements.define('section-element', contenido);

