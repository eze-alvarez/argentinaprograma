const readlineSync = require('readline-sync');
let edad = readlineSync.question("Cual es tu edad? ");


// 1. Escribe un programa para cada uno de los siguientes enunciados:
// a. Solicite al usuario ingresar su edad. Si la edad es mayor o igual a 18, muestra por consola el mensaje: "Eres mayor de edad". De lo contrario, muestra por consola el mensaje: "Eres menor de edad". Guardar en un archivo llamado mayorDeEdad.js

(edad>=18)
? console.log("Eres mayor de edad")
: console.log("Eres menor de edad")