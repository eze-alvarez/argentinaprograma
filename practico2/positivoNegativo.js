const readlineSync = require('readline-sync');
let numero = readlineSync.question("Ingrese un numero: ");

// 1. Escribe un programa para cada uno de los siguientes enunciados:

// b. Solicite al usuario ingresar un número. Si el número es positivo, muestra por consola el mensaje: "El numero es positivo". Si el número es igual a cero, muestra por consola el mensaje: "El numero es cero". Si el número es negativo, muestra por consola el mensaje: "El numero es negativo". Guardar el programa en un archivo con nombre positivoNegativo.js

(numero>0)
? console.log("El numero es positivo")
: (numero==0)
        ? console.log("El numero es cero")
        : console.log("El numero es negativo")