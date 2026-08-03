// archivo: hola_mundo.js

// Mostrar "Hola mundo" en la consola
console.log("Hola mundo");

// Mostrar "Hola mundo" en la página web (si existe un elemento con id="mensaje")
const mensaje = document.getElementById("mensaje");
if (mensaje) {
  mensaje.textContent = "Hola mundo";
}
