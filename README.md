# Juego de Adivinanza en JavaScript

Proyecto practico de JavaScript donde el usuario debe adivinar un numero aleatorio entre 1 y 100.

## Objetivo del proyecto

Construir un juego simple para practicar:

- Variables y numeros aleatorios
- Manipulacion del DOM
- Eventos y funciones
- Validacion de entradas del usuario
- Mensajes dinamicos en pantalla

## Como se hizo el juego

### 1. Estructura base

Se creo una interfaz sencilla con:

- Un campo de entrada para escribir el numero
- Un boton para comprobar
- Un area de mensaje para mostrar pistas o aciertos

### 2. Numero secreto aleatorio

Se genera un numero aleatorio al iniciar el juego:

```js
let numeroAzar = Math.floor(Math.random() * 100) + 1;
```

Con esto, el numero secreto siempre queda dentro del rango 1-100.

### 3. Captura de elementos del DOM

Se enlazaron los elementos HTML desde JavaScript para poder leer el valor ingresado y mostrar mensajes en pantalla:

```js
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
```

### 4. Logica de validacion y comparacion

La funcion principal del juego:

- Convierte el dato ingresado a numero
- Valida que este entre 1 y 100
- Compara con el numero secreto
- Muestra pista: "mayor" o "menor"
- Si acierta, muestra mensaje de exito y bloquea la entrada

## Archivos del proyecto

- `index.html`: estructura del juego
- `style.css`: estilos de la interfaz
- `script.js`: logica del juego

## Como ejecutar

1. Descargar o clonar el repositorio.
2. Abrir `index.html` en el navegador.
3. Escribir un numero entre 1 y 100.
4. Presionar el boton para comprobar.

## Mejoras futuras sugeridas

- Contador de intentos
- Boton de reinicio
- Limite maximo de intentos
- Niveles de dificultad
- Sonidos y animaciones

## Publicacion en GitHub

Este proyecto ya fue inicializado con Git y subido al repositorio remoto en GitHub para su control de versiones y respaldo.
