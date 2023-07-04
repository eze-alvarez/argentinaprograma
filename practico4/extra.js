// EXTRA 1: Definir constantes para las distintas jugadas, es decir, piedra, papel y tijera y adaptar el
// código para su correcta utilización.
 

// EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el
// juego, es decir:
// ● Una jugada: gana el ganador de esa única jugada.
// ● Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que el usuario gane una jugada y la computadora la otra.
// ● Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc


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

function obtenerJugadaUsuario(){
    // Solicitamos al usuario que ingrese su opción
    return prompt("Elige tu opción:\npiedra\npapel\ntijeras");
}

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

function obtenerTipoDeJuego(){
    // Solicitamos al usuario que ingrese su opción
    let juego = prompt(`Que opcion deseas jugar? Ingresar NUMERO de opción:
    1   una jugada
    2   dos jugadas
    3   mejor de 3`);
   
    return juego
}

function jugada(numero){
    let compu = obtenerJugadaComputadora();
    let usuario = obtenerJugadaUsuario();
    let ganador = determinarGanador(compu,usuario);

    console.log(`JUGADA NUMERO ${numero}
    La computadora eligio: ${compu}.
    El usuario eligio: ${usuario}.
    El resultado fue: ${ganador}`);

    return ganador
}

let maximoJugadas = parseInt(obtenerTipoDeJuego())
let ganadosCompu = 0;
let ganadosUsuario = 0;
let empate = 0;
let opcionesDeJuego = []

for(let i=0;i<maximoJugadas;i++){
    let ganadorDeLaJugada = jugada(i+1)   
    if(ganadorDeLaJugada == "computadora gano") ganadosCompu +=1
    if(ganadorDeLaJugada == "usuario gano") ganadosUsuario +=1
    if(ganadorDeLaJugada == "empate") empate +=1
}

if(ganadosCompu>ganadosUsuario){
    console.log( `el GANADOR del juego es la COMPUTADORA 
    final del juego:
        juegos ganados por la computadora: ${ganadosCompu}
        juegos ganados por el usuario: ${ganadosUsuario}
        juegos empatados: ${empate}`)
}else if(ganadosCompu<ganadosUsuario){
    console.log( `el GANADOR del juego es el USUARIO 
    final del juego:
        juegos ganados por la computadora: ${ganadosCompu}
        juegos ganados por el usuario: ${ganadosUsuario}
        juegos empatados: ${empate}`)
}else{
    console.log( `Hay un empate
    final del juego:
        juegos ganados por la computadora: ${ganadosCompu}
        juegos ganados por el usuario: ${ganadosUsuario}
        juegos empatados: ${empate}`)
}