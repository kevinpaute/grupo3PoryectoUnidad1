//Ejemplo con shadowDOM

class ejemploBoton extends HTMLElement { 
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        
    }
    connectedCallback() {
        //creamos el shadowDOM y le indicamos que queremos que sea open (para que se vea)
        this.shadowRoot.innerHTML= `
        <style>
        

        * {
          font-family: "Poppins", sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          outline: none;
          border: none;
          text-decoration: none;
          text-transform: capitalize;
        }

        body {
          padding: 20px;
        }

        .container {
          max-width: 1200px;
          margin: 100px auto;
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          gap: 20px;
        }

        .container .main-video-container {
          flex: 1 1 700px;
          border-radius: 5px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          padding: 15px;
        }

        .container .main-video-container .main-video {
          margin-bottom: 7px;
          border-radius: 5px;
          width: 100%;
        }

        .container .main-video-container .main-vid-title {
          font-size: 20px;
          color: #444;
        }

        .container .video-list-container {
          flex: 1 1 350px;
          height: 485px;
          overflow-y: scroll;
          border-radius: 5px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          padding: 15px;
        }

        .container .video-list-container::-webkit-scrollbar {
          width: 10px;
        }

        .container .video-list-container::-webkit-scrollbar-track {
          background-color: #fff;
          border-radius: 5px;
        }

        .container .video-list-container::-webkit-scrollbar-thumb {
          background-color: #444;
          border-radius: 5px;
        }

        .container .video-list-container .list {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 10px;
          background-color: #eee;
          cursor: pointer;
          border-radius: 5px;
          margin-bottom: 10px;
        }

        .container .video-list-container .list:last-child {
          margin-bottom: 0;
        }

        .container .video-list-container .list.active {
          background-color: #444;
        }

        .container .video-list-container .list.active .list-title {
          color: #fff;
        }

        .container .video-list-container .list .list-video {
          width: 100px;
          border-radius: 5px;
        }

        .container .video-list-container .list .list-title {
          font-size: 17px;
          color: #444;
        }

        @media (max-width: 1200px) {
          .container {
            margin: 0;
          }
        }

        @media (max-width: 450px) {
          .container .main-video-container .main-vid-title {
            font-size: 15px;
            text-align: center;
          }

          .container .video-list-container .list {
            flex-flow: column;
            gap: 10px;
          }

          .container .video-list-container .list .list-video {
            width: 100%;
          }

          .container .video-list-container .list .list-title {
            font-size: 15px;
            text-align: center;
          }
        }
      </style>
      <div class="container">
        <div class="main-video-container">
          <video
            src="images/video5.mp4"
            loop
            controls
            class="main-video"
          ></video>
          <h3 class="main-vid-title">
            Especialista
          </h3>
        </div>

        <div class="video-list-container">
          <div class="list active">
            <video src="images/video4.mp4" class="list-video"></video>
            <h3 class="list-title">Especialista</h3>
          </div>

          <div class="list">
            <video src="images/video2.mp4" class="list-video"></video>
            <h3 class="list-title">Especialista</h3>
          </div>

      
     

          <div class="list">
            <video src="images/video5.mp4" class="list-video"></video>
            <h3 class="list-title">Especialista</h3>
          </div>
          <button>

          </button>
        </div>
      </div>
      
      `
      ;

      //Ejecutar videoMov en shadowRoot
      this.button = this.shadowRoot.querySelector(".container");
      this.button.onclick = () => this.videoMov();
    }

    
    videoMov (){
        //Obtener el video de la lista de videos y ponerlo en el video principal
        const video = this.shadowRoot.querySelector(".list-video");
        const videoMain = this.shadowRoot.querySelector(".main-video");
  
        videoMain.src = video.src;
        videoMain.play();
        //Obtener el siguiente video de la lista de videos y ponerlo en el video principal
        const nextVideo = this.shadowRoot.querySelector(".list.active").nextElementSibling;
        const nextVideoMain = this.shadowRoot.querySelector(".main-video");
        nextVideoMain.src = nextVideo.querySelector(".list-video").src;
        nextVideoMain.play();

  
  
  
        //Poner el video de la lista de videos como activo
        const list = this.shadowRoot.querySelectorAll(".list");
  
        list.forEach(item => {
          item.classList.remove("active");
        }
        ); //end forEach
        this.button.classList.toggle("active");
  
        //Poner el titulo del video de la lista de videos como activo
        const listTitle = this.shadowRoot.querySelectorAll(".list-title");
  
        listTitle.forEach(item => {
          item.classList.remove("active");
        }
        ); //end forEach
        this.button.classList.toggle("active");
  
      }
    
    //Metodo para que el video se reproduzca en el video principal

      // let videoList = document.querySelectorAll('.video-list-container .list');

      // for (let i = 0; i < videoList.length; i++) {
      //   videoList[i].classList.remove('active');
      // }
      // this.div.classList.toggle('active');
}

window.customElements.define('boton-element', ejemploBoton);