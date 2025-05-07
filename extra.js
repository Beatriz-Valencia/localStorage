
const inputNombre = document.getElementById('name')
const inputEmail = document.getElementById('email')
const Mensaje = document.getElementById('message')
const clickEnviar = document.getElementById('btn')
const datosGuardados = document.getElementById("datos-usuario")
let misUsuarios = []

function creaUsuario() {
    const datosFormulario = {
        nombre: inputNombre.value,
        email: inputEmail.value,
        mensaje: Mensaje.value
     
    };
    misUsuarios.push(datosFormulario)
   

}

clickEnviar.addEventListener('click', onSubmit);


function onSubmit(e) {
        e.preventDefault();
        crearUsuario()
           
                localStorage.setItem('usuarios', JSON.stringify (misUsuarios))
          
            console.log (misUsuarios);
            //mostrarUsuario(); 
        }
/

 function mostrarUsuario() {

    datosUsuario.innerText = ""
    
    const datosGuardados = JSON.parse(localStorage.getItem("usuario"))

    console.log(datosGuardados)

    for (i=0; i< datosGuardados.length; i++) {
        let infoUsuario = Object.keys (datosGuardados[1])
        for (let x = 0; x < infoUsuario.length; x++) {
            let infoKey = infoUsuario[x]
            let infoValue = datosGuardados[i][infoKey]
            let usuarioMostrado = `~{infoKey}: ${infoValue}`
            datosUsuario.innerText = usuarioMostrado
        }
    }

    datosGuardados.innerText = `El nombre: ${datosGuardados.nombre}
    El email: ${datosGuardados.email}
    Tu mensaje: ${datosGuardados.mensaje}`
 }

    mostrarUsuario()