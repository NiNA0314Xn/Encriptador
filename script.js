const texto = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".mensaje");/**nose si es mensaje o copiar, porque mensaje es el area de texto a copiar pero el boton es mensaje
 */


function btnEncriptar(){
    const textoEncriptado = encriptar(texto.value);
    mensaje.value = textoEncriptado;
    texto.value = "";
    mensaje.style.backgroundImage = "none";
}
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(texto.value);
    mensaje.value = textoDesencriptado;
    texto.value = "";
    mensaje.style.backgroundImage = "none";
}

let codigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

function encriptar(stringencriptado){
    stringencriptado = stringencriptado.toLowerCase();

    for(let i = 0; i < codigo.length; i++){
        if(stringencriptado.includes(codigo[i][0])) {
            stringencriptado = stringencriptado.replaceAll(codigo[i][0], codigo[i][1])
        }
    }
    return stringencriptado; 

}   
function desencriptar(stringdesencriptado){
    stringdesencriptado = stringdesencriptado.toLowerCase();

    for(let i = 0; i < codigo.length; i++){
        if(stringdesencriptado.includes(codigo[i][1])) {
            stringdesencriptado = stringdesencriptado.replaceAll(codigo[i][1], codigo[i][0])
        }
    }
    return stringdesencriptado;
}
function copiarMensaje(){
    let textcopiado = document.getElementById(mensaje.value)
    navigator.clipboard.writeText(mensaje.value)
    textcopiado.mesajeAll();
}



