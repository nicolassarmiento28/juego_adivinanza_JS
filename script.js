

let numeroAzar = Math.floor(Math.random() * 100) + 1;  // floor redondea hacia abajo, random genera un número entre 0 y 1, multiplicamos por 100 para obtener un número entre 0 y 100, y sumamos 1 para que el rango sea de 1 a 100

let numeroEntrada = document.getElementById("numeroEntrada");
let botonComprobar = document.getElementById("botonComprobar");

let mensaje = document.getElementById("mensaje");

function revisarResultado() {

    let numeroIngresado = parseInt(numeroEntrada.value); // parseInt convierte el valor ingresado a un número entero

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) { // isNaN verifica si el valor no es un número
        mensaje.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        return
    }

    if (numeroIngresado === numeroAzar){
        mensaje.textContent = "¡Felicidades! Has adivinado el número.";
        mensaje.style.color = "green";
        numeroEntrada.disabled = true; // Deshabilita el campo de entrada para evitar más intentos
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = "El número es mayor. Intenta de nuevo.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "El número es menor. Intenta de nuevo.";
        mensaje.style.color = "red";
    }

}

botonComprobar.addEventListener("click", revisarResultado);

numeroEntrada.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        revisarResultado();
    }
});
  
