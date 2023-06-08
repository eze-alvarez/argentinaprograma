// 3. Operadores aritméticos:
// a. Crea cuatro variables que contengan valores numéricos.
let a = 10 ;
let b = 12 ;
let c = 6 ;
let d = 4 ;
// b. Suma las dos primeras variables y guarda el resultado en otra variable.
let sumaAb = a + b; 
// c. Resta la cuarta variable de la tercera y almacena el resultado en otra variable.
let restaDc = c - d;
// d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el resultado en una variable llamada resultadoFinal. El producto debe ser 44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.
let resultadoFinal = sumaAb * restaDc;
// e. Escribe un cálculo que verifique si resultadoFinal es un número par.
// Almacene el resultado en una variable llamada esPar.
let esPar = resultadoFinal % 2 == 0
console.log(esPar);
// f. Imprima por consola un mensaje con el siguiente formato:
// “Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. La respuesta a verificar si el resultado final es par es: [esPar]”
let mensaje = "Mis variables iniciales fueron: " + "let a=10" + ", " + "let b=12" + ", " + "let c=6" + " y " + "let d=4" + ". La respuesta a verificar si el resultado final es par es: " + esPar;
console.log(mensaje);
// g. Deberá guardar este programa en un archivo llamado
// operacionesAritmeticas.js