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
opciones_botones = [especialistas,farmacoterapia,psicologos,fisioterapeutas]; //almaceno 

//Clase para la seccion de acerca de:
class Cabecera extends HTMLElement {
    constructor() {
        // constructor
        super();
        
        
        // Create a shadow root
        const shadow = this.attachShadow({mode: 'open'});

        // Crear hijos principales
        const contenedor = document.createElement('div'); //creo una etiqueta div para el contenedor
        contenedor.setAttribute('class','contenedor');// clase llamada contenedor
        const foto = document.createElement('div');//  creo una etiqueta tipo div para la foto
        foto.setAttribute('class','foto');//clase llamada foto
        const imagen = document.createElement('img');//crea una etiqueta tipo foto
        imagen.setAttribute('src',icono);//llama a la imagen
        imagen.setAttribute('width',"115");//se le pone el ancho
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

// Clase para la seccion de botones
class OptionButton extends HTMLElement {
    constructor() {
      // constructor
      super();
      
    
      // Create a shadow root
      const shadow = this.attachShadow({mode: 'open'});
      const contenedor_botones = document.createElement('div');
      contenedor_botones.setAttribute('class', 'botones')
      const contenedor_info = document.createElement('div');
      contenedor_info.setAttribute('class', 'info')
      const sup_info = document.createElement('div');
   
      
      //Creacion de contenedor de personal
      opciones_botones.forEach(function(area){    //area
        let contenedor = document.createElement('div');
        contenedor.setAttribute('class', `contenedor`);
        area.forEach(function(persona) {           //persona
            let trabajo = document.createElement('div');
            trabajo.setAttribute('class', 'trabajo');
            let contenedorImagen = document.createElement('div');
            contenedorImagen.setAttribute('class', 'contImagen');
            let img = document.createElement('img');
            img.setAttribute('class', 'prue-fot');
            img.setAttribute('src', persona["img"]);
            contenedorImagen.appendChild(img);
            trabajo.appendChild(contenedorImagen);
            let descripcion= document.createElement('div');
            descripcion.setAttribute('class', 'descripcion');
            let nombre= document.createElement('p');
            nombre.setAttribute('class', 'nombre');
            nombre.textContent = persona["nombre"];
            let categoria= document.createElement('p');
            categoria.setAttribute('class', 'categoria');
            categoria.textContent = persona["categoria"];
            descripcion.appendChild(nombre);
            descripcion.appendChild(categoria);
            trabajo.appendChild(descripcion);
            contenedor.appendChild(trabajo);
        })
        contenedor_info.appendChild(contenedor);
      }

      )
      
      
      
      

      
      
      const descripcion= document.createElement('div');
      descripcion.setAttribute('class', 'descripcion');

      
      // Crear botones
      for (var i = 0; i < 4; i++) {
        let boton = document.createElement('button');
        boton.setAttribute('class', 'btn_mostrar'); //clase para el boton
        boton.setAttribute('id', `btn_mostrar${i}`); //id para el botón especifico, es decir con la posición
        boton.addEventListener("click", this.functionToExecute, false);
        boton.textContent = botones[i];
        contenedor_botones.appendChild(boton);
        }
      // Crea algo de CSS para aplicar al shadow dom
      const style = document.createElement('style');
  
      style.textContent = `
        .botones{
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 0.5rem;
            
        }
        .btn_mostrar{
            background-color: #210555;
            border: none;
            border-radius: 40px;
            color: white;
            padding: 15px 32px;
            font-size: 1.2rem;
            box-shadow: 0px 0px 10px 0px #07b3b9;
            cursor: pointer;
            line-height: 1.15;
            margin: 0;
                }
        .contenedor,.info{
            display: none
        }
        .show{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
        }
        .info{
            background: rgba(51, 2, 114, 0.267);
            padding: 60px 0;
        }

        .contenedor{
            border: 1px solid #000;
            background: #fff;
            border-radius: 20px;
            padding: 20px 10px; 
            margin-bottom: 40px;
            font-family: Geneva, Verdana, sans-serif;
            width: 90%;
            max-width: 1000px
        }
        .trabajo{
            width: 22%;
            margin-bottom: 10px;
        }
        .contImg{
            width: 100%;
            margin-bottom: 10px;
        }
        img{
            border-style: none;
            width: 100%;
            vertical-align: top;
            border-radius: 4px;
            box-shadow: 0px 15px 5px rgb(0 0 0 / 50%);
            cursor: pointer;
        }
        .descripcion{
            text-align: center;
        }
        .nombre{
            font-weight: 700;
            color: #3895ea;
            margin-bottom: 10px;
        }
        .categoria{
            font-size: 14px;
            color: #636363;
        }
      `;
  
      // unir hijos principales
      shadow.appendChild(contenedor_botones);
      shadow.appendChild(contenedor_info);
      shadow.appendChild(style);
    }
    functionToExecute(e){
        let opc = e.target.id // obtiene el ID del botón que realiza el evento
        const botones_total = e.target.parentNode.getElementsByClassName(`btn_mostrar`);//
        const boton_sel = e.target.parentNode.nextSibling.getElementsByClassName(`contenedor`);//asegurarse de obtener los datos del Shadow y modificarlos a conveniencia
        const info = e.target.parentNode.nextSibling; //obtiene la etiqueta
        if(e.target.className == 'btn_mostrar'){  // se cambia la clase verificar y itera 
            e.target.setAttribute('class', 'btn_mostrar show1');
            for (let i = 0; i < botones_total.length; i++) {  //ciclo para el tamaño
                if(botones_total[i].id == opc){   //compara cada botón
                    boton_sel[i].setAttribute('class', 'contenedor show');
                    info.setAttribute('class','info show');
                }else{
                    botones_total[i].setAttribute('class', 'btn_mostrar'); //nose muestren
                    boton_sel[i].setAttribute('class', 'contenedor');
                }
                
            }

        }else{
            for (let i = 0; i < botones_total.length; i++) {
                botones_total[i].setAttribute('class', 'btn_mostrar');
                boton_sel[i].setAttribute('class', 'contenedor');
                info.setAttribute('class','info');
            }
        }
    }
  }
  //Define la seccion de Acerca de
customElements.define('seccion-cabecera', Cabecera);
  
// Define la seccion de botone
customElements.define('option-button', OptionButton);