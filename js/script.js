let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container .main-video').src = src;
      document.querySelector('.main-video-container .main-video').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});

class ejemploComb extends HTMLElement {      
   constructor() { 
     super();
   }
   connectedCallback() {
       let shadowRoot = this.attachShadow({mode: 'open'});  // Crea el shadowRoot
       const t = document.querySelector('#template');  // Selecciona el template
       const instance = t.content.cloneNode(true);  // Clona el template y lo guarda en una variable (instance)

       shadowRoot.appendChild(instance);  // Inserta el template en el shadowRoot
       /*this.shadowRoot.querySelector('#btn').addEventListener('click', () => {
           this.shadowRoot.querySelector('#btn').style.backgroundColor = 'red';
       });*/
   }
}

window.customElements.define('comb-element', ejemploComb);