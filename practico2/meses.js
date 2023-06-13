const readlineSync = require('readline-sync');
let numero = readlineSync.question("Ingrese un numero entero del 1 al 12: ");

// 2. Escriba un programa que solicite al usuario ingresar un número entero del 1 al 12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es marzo, etc. Su programa deberá ser guardado en un archivo meses.js y consistirá de imprimir por consola la cantidad de días que tiene el mes ingresado bajo el siguiente formato:
// "La cantidad de dias del mes de [mes] es [cantidadDeDias]"
// Por ejemplo: si el número ingresado es 1, su programa imprimirá “La cantidad de dias del mes de enero es 31”.
// Para el alcance de este ejercicio, podemos pensar que febrero siempre tiene 28 días.

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let mes = meses[numero-1];
if(mes=="Enero" || mes=="Marzo" || mes=="Mayo" ||mes=="Julio" || mes=="Agosto" || mes=="Octubre"|| mes =="Diciembre"){
    console.log(`La cantidad de dias del mes de ${mes} es 31`)
}
else if(mes=="Febrero"){
    console.log(`La cantidad de dias del mes de ${mes} es 28`)
}
else{
    console.log(`La cantidad de dias del mes de ${mes} es 30`)
}
