import { nombrePersona } from "./generadorNombre.js";
import { estatura } from "./generadorEstatura.js";
import {TOKEN} from "./generarToken.js";
import {generarURI} from "./generadorURI.js";
import {consumirAPI} from "./servicio.js"

//console.log(estatura,nombrePersona)


// Detectar el click en el boton del formulario 
let boton = document.getElementById("boton")
boton.addEventListener("click",function(evento){

    evento.preventDefault()

    let frutaSeleccionada = document.getElementById("frutas").value
    

    let URI = generarURI(frutaSeleccionada)

    async function activarAPI(){

    let datosConsultadosAPI= await consumirAPI(URI,TOKEN)
    console.log(datosConsultadosAPI)
    
    }

    activarAPI()


})