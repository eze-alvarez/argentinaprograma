// Pasos a seguir:
// 1. Crea un nuevo archivo JavaScript con nombre piedraPapelTijeras.js.
// 2. Crea una función llamada obtenerJugadaComputadora que generará un número aleatorio entre 0 y 2 para representar las opciones:
// - 0 para "piedra",
// - 1 para "papel" y
// - 2 para "tijeras"
// Siempre utilizando los valores de strings y no los valores númericos.

// Ayuda1: Utilizar alguna estructura de datos para almacenar la relación entre los valores
// numércios y los strings “piedra”, “papel” y “tijeras.
// Ayuda2: revisar en el teórico cuál es la función de la librería Math que genera un número
// random.
function obtenerJugadaComputadora(){
    var numeroRandom = Math.floor(Math.random() * 3);
    switch(numeroRandom){
        case 0 :
            return 'piedra';
            break;
        case 1:
            return 'papel' ;
            break;
        default :
            return 'tijeras';
            break;   
    }        
}

// 3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su
// elección a través de la consola. Los valores posibles son: piedra, papel o tijeras.
// Ayuda: revisa en el práctico de condicionales, como solicitar al usuario que ingrese un
// valor por consola.
function obtenerJugadaUsuario(){
    // Solicitamos al usuario que ingrese su opción
    return prompt("Elige tu opción:\npiedra\npapel\ntijeras");
}
// 4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas
// de la computadora y del usuario. Implementa las reglas del juego para determinar el
// ganador y retorna el resultado.
function determinarGanador(compu,usuario){
    if(compu == "piedra"){
        switch(usuario){
            case "piedra":
                return "empate";
                break;
            case "papel":
                return "usuario gano";
                break;
            default:
                return "computadora gano";
                break;
        }
    }

    if(compu == "papel"){
        switch(usuario){
            case "piedra":
                return "computadora gano";
                break;
            case "papel":
                return "empate";
                break;
            default:
                return "usuario gano";
                break;
        }        
    }
    if(compu == "tijeras"){
        switch(usuario){
            case "piedra":
                return "usuario gano";
                break;
            case "papel":
                return "computadora gano";
                break;
            default:
                return "empate";
                break;
        }
    }

}
// 5. Llama a las funciones en el orden adecuado para ejecutar el juego:
// a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una
// variable.
let compu = obtenerJugadaComputadora();
// b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
let usuario = obtenerJugadaUsuario();
// c) Invoca la función determinarGanador pasando como argumentos las jugadas de
// la computadora y del usuario. Almacena el resultado en una variable.
let ganador = determinarGanador(compu,usuario);
// 6. Imprime por pantalla el resultado del juego utilizando la función console.log(). El mensaje
// debe indicar la jugada de la computadora, la jugada del usuario y el resultado del juego
// (quién ganó o si fue un empate). Se debe respetar el siguiente formato dependiendo del
// resultado:
// La computadora eligio: [jugadaComputador]. El usuario eligio: [jugadaUsuario].
// El resultado fue: [Empate | Gana la computadora | Gana el usuario].
// NOTA: no es necesario imprimir todo el mensaje en una sola línea, se puede imprimir en
// tres párrafos.
console.log(`La computadora eligio: ${compu}.
El usuario eligio: ${usuario}.
El resultado fue: ${ganador}`);


