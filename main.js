//1 Crear un formulario de contacto en HTML con los siguientes campos:
//Nombre
//Correo
//Mensaje


//2 Crea una función que cuando envíes el formulario muestre por consola los datos de contacto rellenados en un objeto de JS.

const inputNombre = document.getElementById('name')
const inputEmail = document.getElementById('email')
const Mensaje = document.getElementById('message')
const clickEnviar = document.getElementById('btn')
const datosUsuario= document.getElementById("datos-usuario")


console.log("Nombre: ", inputNombre);
console.log("Correo: ", inputEmail);
console.log("Mensaje; ", Mensaje);
console.log ("Botón Enviar: ", clickEnviar)

//clickEnviar.addEventListener('click', onSubmit);

//EJECUTAR FUNCIÓN ONSUBMIT DE PRUEBA:
// function onSubmit(e) {
//     e.preventDefault()

//     console.log('confirmación de que estoy ejecutando el preventDefault con la función onSubmit')
// }

//LLEVAR A LA CONSOLA LOS DATOS DEL INPUT "NOMBRE"
// function onSubmit(e) {
//      e.preventDefault()
//       const firstNameValue = inputNombre.value
//      console.log('input value: ', firstNameValue);
//}

//LLEVAR A LA CONSOLA LOS DATOS DEL INPUT "EMAIL"
// function onSubmit(e) {
//     e.preventDefault()
//     const emailValue = inputEmail.value
//     console.log('input email value: ', emailValue);
// }

//LLEVAR A LA CONSOLA LOS DATOS DEL INPUT "MESSAGE"
// function onSubmit(e) {
//     e.preventDefault()
//     const messageValue = Mensaje.value
//     console.log('input message value: ', messageValue);
// }


//3 Guardar en Local Storage el objeto consoleado antes (sólo guarda un usuario)

//4 Muestra el usuario que has guardado en el DOM (en el HTML). Pista: utiliza JSON.parse() y JSON.stringify() .


clickEnviar.addEventListener('click', onSubmit); //en general, es mejor ponerlo abajo del onSubmit.


function onSubmit(e) {
        e.preventDefault();

            const datosFormulario = {
                nombre: inputNombre.value,
                email: inputEmail.value,
                mensaje: Mensaje.value
             
            };
            //EL VALOR QUE HEMOS RECOGIDO LO GUARDAMOS EN EL LOCAL STORAGE:
                localStorage.setItem('usuario', JSON.stringify (datosFormulario))
            // localStorage.setItem('Nombre', inputNombre.value)
            // localStorage.setItem('Email', inputEmail.value)
            // localStorage.setItem('Mensaje', Mensaje.value)
            console.log ('usuario ', datosFormulario);
            mostrarUsuario(); //para el ejercicio 4
        }
//4 Muestra el usuario que has guardado en el DOM (en el HTML). Pista: utiliza JSON.parse() y JSON.stringify() .
        //guardar en HTML

        //RESTO DEL EJERCICIO 4

 function mostrarUsuario() {
    const datosGuardados = JSON.parse(localStorage.getItem("usuario"))
    console.log(datosGuardados)
    datosUsuario.innerText = `El nombre: ${datosGuardados.nombre}
    El email: ${datosGuardados.email}
    Tu mensaje: ${datosGuardados.mensaje}`
 }

//  Ejercicio Extra:

//  Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardándolos todos).
//  Mostrar los datos de los contactos guardados en el DOM.
//  Crea un botón para borrar todos los contactos guardados en Local Storage.
//  Pista: tendrás que ir guardando los datos en un array.
