class ejemploTabla extends HTMLElement { //Se ejecuta cuando el elemento se ha eliminado del DOM
    constructor() { //Se ejecuta al crear el elemento
        super();

    }
    connectedCallback() { //Se ejecuta cuando el elemento se ha insertado en el DOM
        this.innerHTML = `  
        <style>
        * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        /*Para que todo tenga la misma cantidad de anchura*/
    }
    
    /* CAMBIO DEL FONDO */
    body {
        background: #EAF2F8;
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
    }
    
    .contenedor {
        width: 90%;
        max-width: 1000px;
        /* background: #ccc;*/
        margin: auto; /*Para cetrar todo*/
        overflow: hidden;
    }
    
    /* ------ ------ HEADER ------- -----*/
    header {
        background: url("https://avada.theme-fusion.com/health/wp-content/uploads/sites/76/2016/01/header-image-homepage.jpg");
        background-repeat: no-repeat;
        background-position: center;
        max-height: 600px; /*Alto maximo*/
    }
    
    header .menu {
        margin: 40px 0;
    }
    
    header .menu a {
        margin: 0 20px;
        color: #fff;
        padding-bottom: 9px;
        display: inline-block;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        font-size: 1em;
    }
    
    header .menu a:hover {
        border-bottom: 2px solid #fff;
    }
    
    header .contenedor-texto {
        display: flex;
        justify-content: center;
        align-content: center;
        margin: 190px 0;
    }
    
    header .contenedor-texto .texto {
        border: 2px solid rgba(255, 255, 255, 0.5); /*Borde cuadrado*/
        border-radius: 3px;
        display: inline-block;
        text-align: center;
        padding: 20px 60px;
    }
    
    header .contenedor-texto .texto h1,
    header .contenedor-texto .texto h2 {
        color: #fff;
        font-weight: 300;
        margin: 0;
    }
    
    header .contenedor-texto .texto .nombre {
        margin-bottom: 10px;
        font-size: 50px;
        line-height: 50px;
    }
    
    header .contenedor-texto .texto .profecion {
        font-size: 25px;
        line-height: 25px;
    }
    
        </style>
        
        <header>
        <div class="contenedor">
          <nav class="menu">
            <a href="index.html">Home</a>
            <a href="about.html">Quienes somos</a>
            <a href="ambit-negocio.html">Ambito del negocio</a>
            <a href="profesionales.html">Profesionales a cargo</a>
            <a href="Login.html">Login</a>
          </nav>
    
          <div class="contenedor-texto">
            <div class="texto">
              <h1 class="nombre">Vida Saludable</h1>
              <h2 class="profesion">Supera el Covid-19 con nosotros</h2>
            </div>
          </div>
        </div>
      </header>
      
        `;
    }
}
window.customElements.define('tabla-element', ejemploTabla);    //Se define el nombre del elemento y la clase que lo define




class footer extends HTMLElement { //Se ejecuta cuando el elemento se ha eliminado del DOM
    constructor() { //Se ejecuta al crear el elemento
        super();

    }
    connectedCallback() { //Se ejecuta cuando el elemento se ha insertado en el DOM
        this.innerHTML = `  
        <style>
        footer {
            padding: 10px 0;
        }
        
        footer .contacto .titulo {
            font-size: 34px;
            line-height: 34px;
            margin-bottom: 40px;
            font-weight: 300;
            color: #3895ea;
            text-align: center;
        }
        
        footer .contacto .formulario {
            display: flex;
            flex-wrap: wrap; /*Dividir el espacio*/
            justify-content: space-between; /*Separar el espacio de cada elemento*/
        }
        
        footer .contacto .formulario input[type="text"],
        footer .contacto .formulario input[type="email"],
        footer .contacto .formulario textarea {
            border: 2px solid #cecece;
            border-radius: 5px;
            padding: 15px 20px;
            font-size: 20px;
            color: #a4a4a4;
        }
        /*
        footer .contacto .formulario input[type="text"]:focus,
        footer .contacto .formulario input[type="email"]:focus,
        footer .contacto .formulario textarea:focus {
            border: 2px solid #3895ea;
        }
        */
        footer .contacto .formulario input[type="text"],
        footer .contacto .formulario input[type="email"] {
            width: 49%;
            margin-bottom: 15px;
        }
        
        footer .contacto .formulario textarea {
            width: 100%;
            height: 100px;
            min-width: 100%;
            max-width: 100%;
            min-height: 100px;
            max-height: 300px;
            margin-bottom: 15px;
        }
        
        footer .contacto .formulario .boton {
            margin: auto;
            background: #3895ea;
            color: #fff;
            border: none;
            border-radius: 3px;
            padding: 15px 40px;
            cursor: pointer;
        }
        
        footer .contacto .formulario .boton:hover {
            background: #387eba;
        }
        
        footer .redes-sociales {
            background: #1e2b38;
            padding: 60px 0;
        }
        
        footer .contenedor {
            display: flex;
            justify-content: center;
        }
        
        footer .redes-sociales a {
            color: #fff;
            text-align: center;
            width: 100px;
            display: block;
            padding: 15px 0;
            border-radius: 3px;
            font-size: 30px;
            margin: 0 20px;
        }
        .opcion {
            width: 25%;
            height: 100%;
            color: white;
            display: grid;
            padding: 2%;
        }
        
        .fondofooter {
            background: url("../img/footer.jpg");
        }
        
        .opcion a {
            text-decoration: none;
            color: black;
            font-size: 14px;
            margin-top: 20px;
        }
        
        .opcion h2 {
            font-size: 20px;
            font-weight: bold;
            color: rgb(3, 0, 48);
        }
        
        .opcion h2:hover {
            color: rgb(0, 106, 133);
        }
        
        .opcion a:hover {
            color: rgb(0, 106, 133);
        }
        
    
        </style>
        
        <footer>
        <section class="">
          <h2 id="ubicacion">Ubicación</h2>
          <hr id="hr">
          <div class="mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15959.115859167747!2d-79.17873549668754!3d-0.2544863113485944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sec!4v1638089330849!5m2!1sen!2sec"
              width="100%" height="450" style="border: 0" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </section>
    
        <section class="redes-sociales">
          <div class="contenedor">
            <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="youtube"><i class="fab fa-youtube"></i></a>
            <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </section>
    
        <div class="fondofooter">
          <div class="contenedor">
    
            <div class="opcion">
    
              <h2>El Hospital</h2>
              <a href="#">Especialidades</a>
              <a href="profesionales.html">Nuestros médicos</a>
              <a href="about.html">Acerca de nosotros</a>
              <a href="#">Instalaciones y servicios</a>
              <a href="#">Impacto ambiental</a>
    
    
            </div>
            <div class="opcion">
              <h2>Productos y servicios</h2>
              <a href=""><img align="center" src="./img/laboratorio-medico.png" width="25px" height="25px">Laboratorio</a>
              <a href=""><img align="center" src="./img/doctor.png" width="25px" height="25px"> Imagen</a>
              <a href=""><img align="center" src="./img/prueba-de-covid.png" width="25px" height="25px"> Pruebas de covid
                19</a>
    
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
            </div>
            <div class="opcion">
              <h2>CONTACTO</h2>
              <a href=""><img align="center" src="./img/contacto.png" width="25px" height="25px"> <b>(+593)</b>
                960089365</a>
              <a href=""><img align="center" src="./img/contacto.png" width="25px" height="25px"> <b>(+593)</b>
                985318187</a>
              <a href=""><img align="center" src="./img/contacto.png" width="25px" height="25px"> <b>(+593)</b>
                960078542</a>
              <a href=""><img align="center" src="./img/correo-electronico.png" width="25px"
                  height="25px">info@clinicmonblue.org.ec</a>
              <a href=""><img align="center" src="./img/pin-de-ubicacion.png" width="25px" height="25px">Rosales Av.Manuel
                Rendon. Santo Domingo - Ecuador</a>
    
    
            </div>
            <div class="opcion">
              <h2>CLÍNICA MONKEY-BLUE</h2>
              <a id="imagen2" href="#"><img src="./img/iconoclinica.png" alt=""></a>
    
            </div>
    
          </div>
    
        </div>
    
      </footer>
      
        `;
    }
}
window.customElements.define('tabla-element2', footer);





