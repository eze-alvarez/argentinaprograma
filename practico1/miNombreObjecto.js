// 2. ¿De qué manera representaría las variables del ejercicio anterior en un objeto,
// llamémosle persona?
// a. Defina una variable de tipo objeto que lleve el nombre persona, y que
// contenga las variables nombre, apellido y edad del ejercicio anterior con
// sus respectivos valores.
let persona = {
    nombre: "Gonzalo Ezequiel",
    apellido: "Alvarez Peredo",
    edad:      37
};
// b. Imprime por consola un mensaje que respete el siguiente formato:
// “Mi objeto persona es el siguiente: [persona]”
let personaString = JSON.stringify(persona)
console.log("Mi objeto persona es el siguiente: "+ personaString)
// Observación: Deberás usar la función JSON.stringify para poder imprimir
// por consola el objeto persona de una manera legible.
// c. Deberá guardar este programa en un archivo llamado
// miNombreObjecto.js