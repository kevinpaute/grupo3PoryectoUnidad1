export let correcto = "Bienvenido al Login.";


//exportar setTimeout para terminar de cargar la pagina
export function terminarCarga() {
    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);
}
