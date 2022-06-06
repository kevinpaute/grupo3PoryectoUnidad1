//Variables a editar
//Variables para seccion de descripcion
const icono = "img/icono-clin.png" ;
const titulo = "Acerca de Blue Monkey Clinic";
const subt1 = "BLUE MONKEY CLINIC:";
const cont1 = "HOSPITAL GENERAL PRIVADO SANTO DOMINGO DE LOS TSÁCHILAS";
const texto = "Los mejores servicios de salud en prevención, rehabilitación y recuperación con seguridad, eficacia y calidez. Somos líderes en servicios de salud certificados con excelencia profesional y tecnología moderna";
//Variables para botones
//nombre de botones
const botones = ['ESPECIALISTAS ♥','FARMACOTERAPIA ♥','PSICÓLOGOS ♥','FISIOTERAPEUTAS ♥'];
//informacion de personal
const especialistas = [{"img":"img/Trabajos/1.jpg","nombre":"Alejandra Torres","categoria":"Seguridad del personal sanitario"},
      {"img":"img/Trabajos/2.png","nombre":"Dayana Navarro","categoria":"Angiología"},
      {"img":"img/Trabajos/3.jpg","nombre":"Leonardo Cruz","categoria":"Genética"},
      {"img":"img/Trabajos/4.jpg","nombre":"Carlos Curiel","categoria":"Hematología"},
      {"img":"img/Trabajos/5.png","nombre":"Steven Varela","categoria":"Nefrología"},
      {"img":"img/Trabajos/8.jpg","nombre":"Milena Viveres","categoria":"Neurología"},
      {"img":"img/Trabajos/6.jpg","nombre":"Kevin Aranda","categoria":"Pediatría"},
      {"img":"img/Trabajos/7.jpg","nombre":"Melany Cueva","categoria":"Psiquiatría"}];
      
const farmacoterapia = [{"img":"img/Trabajos/1.jpg","nombre":"Alejandra Torres","categoria":"Seguridad del personal sanitario"},
      {"img":"img/Trabajos/2.png","nombre":"Maria Párraga","categoria":"Angiología"},
      {"img":"img/Trabajos/3.jpg","nombre":"Vinicio Borja","categoria":"Genética"},
      {"img":"img/Trabajos/4.jpg","nombre":"Carlos Enriquez","categoria":"Hematología"},
      {"img":"img/Trabajos/5.png","nombre":"Eduardo Valencia","categoria":"Nefrología"},
      {"img":"img/Trabajos/8.jpg","nombre":"Kelly Gomez","categoria":"Neurología"},
      {"img":"img/Trabajos/6.jpg","nombre":"Elian Gualpa","categoria":"Pediatría"},
      {"img":"img/Trabajos/7.jpg","nombre":"Carmen Ruiz","categoria":"Psiquiatría"}];

const psicologos = [{"img":"img/Trabajos/1.jpg","nombre":"Alejandra Torres","categoria":"Seguridad del personal sanitario"},
      {"img":"img/Trabajos/2.png","nombre":"Luisa Palma","categoria":"Angiología"},
      {"img":"img/Trabajos/3.jpg","nombre":"Eduardo Moreira","categoria":"Genética"},
      {"img":"img/Trabajos/4.jpg","nombre":"Pablo Moreira","categoria":"Hematología"},
      {"img":"img/Trabajos/5.png","nombre":"Edison Romero","categoria":"Nefrología"},
      {"img":"img/Trabajos/8.jpg","nombre":"Marilyn Santos","categoria":"Neurología"},
      {"img":"img/Trabajos/6.jpg","nombre":"Luis Párraga","categoria":"Pediatría"},
      {"img":"img/Trabajos/7.jpg","nombre":"Camila Párraga","categoria":"Psiquiatría"}];
      
const fisioterapeutas = [{"img":"img/Trabajos/1.jpg","nombre":"Alejandra Torres","categoria":"Seguridad del personal sanitario"},
      {"img":"img/Trabajos/2.png","nombre":"Maribel Moreira","categoria":"Angiología"},
      {"img":"img/Trabajos/3.jpg","nombre":"Fernando Burgos","categoria":"Genética"},
      {"img":"img/Trabajos/4.jpg","nombre":"Kevin Paute","categoria":"Hematología"},
      {"img":"img/Trabajos/5.png","nombre":"Luis Gomez","categoria":"Nefrología"},
      {"img":"img/Trabajos/8.jpg","nombre":"Jonsu Burgos","categoria":"Neurología"},
      {"img":"img/Trabajos/6.jpg","nombre":"Katerine Lopez","categoria":"Pediatría"},
      {"img":"img/Trabajos/7.jpg","nombre":"Selena Rivas","categoria":"Psiquiatría"}];
//formacion de Array para automatizar
opciones_botones = [especialistas,farmacoterapia,psicologos,fisioterapeutas];

//Clase para la seccion de acerca de:
class Cabecera extends HTMLElement {
    constructor() {
        // constructor
        super();
        
        
        // Create a shadow root
        const shadow = this.attachShadow({mode: 'open'});

        // Crear hijos principales
        const contenedor = document.createElement('div');
        contenedor.setAttribute('class','contenedor');
        const foto = document.createElement('div');
        foto.setAttribute('class','foto');
        const imagen = document.createElement('img');
        imagen.setAttribute('src',icono);
        imagen.setAttribute('width',"115");
        const contenido_texto = document.createElement('div');
        contenido_texto.setAttribute('class','texto');
        const cont_titulo = document.createElement('h3');
        cont_titulo.setAttribute('class','titulo');
        cont_titulo.textContent = titulo;
        const parrafo = document.createElement('p');
        const monkey1 = document.createElement('span');
        monkey1.setAttribute('class','monkey');
        monkey1.textContent = subt1;
        const monkey2 = document.createElement('span');
        monkey2.setAttribute('class','monkey-2');
        monkey2.textContent = cont1;
        const cont_parrafo =document.createElement('p');
        cont_parrafo.textContent = texto;
        //formacion de estructura
        foto.appendChild(imagen);
        contenedor.appendChild(foto);
        contenido_texto.appendChild(cont_titulo);
        parrafo.appendChild(monkey1);
        parrafo.appendChild(monkey2);
        parrafo.appendChild(cont_parrafo);
        //parrafo.textContent = texto;
        contenido_texto.appendChild(parrafo);
        contenedor.appendChild(contenido_texto);

         // Crear CSS para el shadow dom
         const style = document.createElement('style');
    
         style.textContent = `
         .contenedor{
            overflow: visible;
       }
       .foto{
        margin-top: -60px;
       }
       .img{
        vertical-align: top;
        border-radius: 50%;
        border: 5px solid rgba(255, 255, 255, 0.2);
       }
       .texto{
        color: #5a5a5a;
        font-size: 1em;
        line-height: 30px;
        width: 80%;
        margin: 40px auto 60px auto;
       }
       .titulo{
        font-size: 34px;
        line-height: 34px;
        margin-bottom: 40px;
        font-weight: 300;
        color: #007491;
        text-align: center;
       }
       .monkey{
        font-size: 1rem;
        font-weight: 700;
        color: #063158;
        letter-spacing: 6px;
       }
       .monkey-2{
        font-size: 1rem;
        font-weight: 700;
        color: rgb(10, 121, 196);
    }
         `;
 
        // Attach the created elements to the shadow dom
        shadow.appendChild(contenedor);
        shadow.appendChild(style);
    }
}