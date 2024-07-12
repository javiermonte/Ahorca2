// // variables

// // Array de palabras
// var palabras = [["atlantico", "Un océano"], ["ordenador", "Una máquina"], ["laurel", "Un árbol"], ["plaza", "Espacio público"], ["rueda", "Gran invento"], ["tomate", "Una fruta"], ["escondido", "Un juego"], ["higuera", "Un árbol"], ["everest", "un monte"], ["relampago", "Antecede al trueno"], ["jirafa", "Un animal"], ["luxemburgo", "Un país"], ["colombia", "Un país"], ["ilustracion", "Representación gráfica"], ["excursion", "Actividad en la naturaleza"], ["mogolla", "De la panadería"], ["repolla", "De la pastelería"], ["sena", "Lugar para estudiar"], ["carrera", "Competición"], ["cuchara", "para comer"]];
// // Palabra a averiguar
// var palabra = "";
// // Nº aleatorio
// var rand;
// // Palabra oculta
// var oculta = [];
// // Elemento html de la palabra
// var hueco = document.getElementById("palabra");
// // Contador de intentos
// var cont = 6;
// // Botones de letras
// var buttons = document.getElementsByClassName('letra');
// // Boton de reset
// var btnInicio = document.getElementById("reset");




// //  palabra al azar
// function generaPalabra() {
//     rand = (Math.random() * 19).toFixed(0);
//     palabra = palabras[rand][0].toUpperCase();
//     console.log(palabra);
// }


// function pintarGuiones(num) {
//     for (var i = 0; i < palabra.length; i++) {
//         if (palabra[i] === ' ') {
//             oculta[i] = ' '; // Mantén el espacio en blanco como está
//         } else {
//             oculta[i] = '_'; // Usa guión bajo para las letras ocultas
//         }
//     }
//     hueco.innerHTML = oculta.join("");
// }



// //Generar abecedario
// function generaABC(a, z) {
//     document.getElementById("abcdario").innerHTML = "";
//     var i = a.charCodeAt(0), j = z.charCodeAt(0);
//     var letra = "";
//     for (; i <= j; i++) {
//         letra = String.fromCharCode(i).toUpperCase();
//         document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra' id='" + letra + "'>" + letra + "</button>";
//         if (i == 110) {
//             document.getElementById("abcdario").innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='" + letra + "'>Ñ</button>";
//         }
//     }
// }

// // Revisar intento
// function intento(letra) {
//     document.getElementById(letra).disabled = true;
//     if (palabra.indexOf(letra) != -1) {
//         for (var i = 0; i < palabra.length; i++) {
//             if (palabra[i] == letra) oculta[i] = letra;
//         }
//         hueco.innerHTML = oculta.join("");
//         document.getElementById("acierto").innerHTML = "Bien!";
//         document.getElementById("acierto").className += "acierto verde";
//     } else {
//         cont--;
//         document.getElementById("intentos").innerHTML = cont;
//         document.getElementById("acierto").innerHTML = "Fallo!";
//         document.getElementById("acierto").className += "acierto rojo";
//         document.getElementById("image" + cont).className += "fade-in";
//     }
//     compruebaFin();
//     setTimeout(function () {
//         document.getElementById("acierto").className = "";
//     }, 800);
// }

// // pista
// function pista() {
//     document.getElementById("hueco-pista").innerHTML = palabras[rand][1];
// }

// // Compruba si ha finalizado
// function compruebaFin() {
//     if (oculta.indexOf("_") == -1) {
//         document.getElementById("miahorcado").innerHTML = "Felicidades !!";
//         document.getElementById("miahorcado").className += "zoom-in";
//         document.getElementById("palabra").className += " encuadre";
//         for (var i = 0; i < buttons.length; i++) {
//             buttons[i].disabled = true;
//         }
//         document.getElementById("reset").innerHTML = "Empezar";
//         btnInicio.onclick = function () { location.reload() };
//     } else if (cont == 0) {
//         document.getElementById("msg-final").innerHTML = "Perdiste";
//         document.getElementById("msg-final").className += "zoom-in";
//         for (var i = 0; i < buttons.length; i++) {
//             buttons[i].disabled = true;
//         }
//         document.getElementById("reset").innerHTML = "Empezar";
//         btnInicio.onclick = function () { location.reload() };
//     }
// }


// // Restablecer juego
// function inicio() {
//     generaPalabra();
//     pintarGuiones(palabra.length);
//     generaABC("a", "z");
//     cont = 6;
//     document.getElementById("intentos").innerHTML = cont;
// }

// // Iniciar con un nivel predeterminado
// function inicio(numIntentos) {
//     generaPalabra();
//     pintarGuiones(palabra.length);
//     generaABC("a", "z");
//     cont = numIntentos;
//     document.getElementById("intentos").innerHTML = cont;
// }

// // Iniciar juego al cargar la página (por defecto a nivel fácil)
// window.onload = function () {
//     inicio(6); // Inicia con 6 intentos (nivel fácil)
// }
// // Iniciar
// window.onload = inicio();

// Variables

// Array de palabras
var palabras = [
    ["atlantico", "Un océano"],
    ["ordenador", "Una máquina"],
    ["laurel", "Un árbol"],
    ["plaza", "Espacio público"],
    ["rueda", "Gran invento"],
    ["tomate", "Una fruta"],
    ["escondido", "Un juego"],
    ["higuera", "Un árbol"],
    ["everest", "Un monte"],
    ["relampago", "Antecede al trueno"],
    ["jirafa", "Un animal"],
    ["luxemburgo", "Un país"],
    ["colombia", "Un país"],
    ["ilustracion", "Representación gráfica"],
    ["excursion", "Actividad en la naturaleza"],
    ["mogolla", "De la panadería"],
    ["repolla", "De la pastelería"],
    ["sena", "Lugar para estudiar"],
    ["carrera", "Competición"],
    ["cuchara", "Para comer"]
];

// Palabra a averiguar
var palabra = "";
// Número aleatorio
var rand;
// Palabra oculta
var oculta = [];
// Elemento HTML de la palabra
var hueco = document.getElementById("palabra");
// Contador de intentos
var cont = 0;
// Botones de letras
var buttons = document.getElementsByClassName('letra');
// Botón de reinicio
var btnInicio = document.getElementById("reset");

// Generar palabra al azar
function generaPalabra() {
    rand = Math.floor(Math.random() * palabras.length);
    palabra = palabras[rand][0].toUpperCase();
    console.log(palabra);
}

// Pintar guiones
function pintarGuiones() {
    oculta = Array(palabra.length).fill('_'); // Inicializa con guiones bajos
    hueco.innerHTML = oculta.join(" ");
}

// Generar abecedario
function generaABC(a, z) {
    document.getElementById("abcdario").innerHTML = "";
    var i = a.charCodeAt(0), j = z.charCodeAt(0);
    for (; i <= j; i++) {
        var letra = String.fromCharCode(i).toUpperCase();
        document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra' id='" + letra + "'>" + letra + "</button>";
        if (i == 110) {
            document.getElementById("abcdario").innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='Ñ'>Ñ</button>";
        }
    }
}

// Revisar intento
function intento(letra) {
    document.getElementById(letra).disabled = true;
    if (palabra.indexOf(letra) != -1) {
        for (var i = 0; i < palabra.length; i++) {
            if (palabra[i] == letra) oculta[i] = letra;
        }
        hueco.innerHTML = oculta.join(" ");
        document.getElementById("acierto").innerHTML = "¡Bien!";
        document.getElementById("acierto").className = "acierto verde";
    } else {
        cont--;
        document.getElementById("intentos").innerHTML = cont;
        document.getElementById("acierto").innerHTML = "¡Fallo!";
        document.getElementById("acierto").className = "acierto rojo";
        document.getElementById("image" + cont).className += "fade-in";
    }
    compruebaFin();
    setTimeout(function () {
        document.getElementById("acierto").className = "";
    }, 800);
}

// Pista
function pista() {
    document.getElementById("hueco-pista").innerHTML = palabras[rand][1];
}

// Comprobar fin
function compruebaFin() {
    if (!oculta.includes("_")) {
        document.getElementById("miahorcado").innerHTML = "¡Felicidades!";
        document.getElementById("miahorcado").className += "zoom-in";
        finalizarJuego();
    } else if (cont === 0) {
        document.getElementById("msg-final").innerHTML = "Perdiste";
        document.getElementById("msg-final").className += "zoom-in";
        finalizarJuego();
    }
}

// Función para finalizar el juego
function finalizarJuego() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true; // Deshabilitar los botones de letras
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function () { location.reload(); }; // Recargar la página al reiniciar
}

// Restablecer juego
function inicio(numIntentos) {
    cont = numIntentos; // Establecer el contador de intentos
    generaPalabra();
    pintarGuiones();
    generaABC("a", "z");
    document.getElementById("intentos").innerHTML = cont;
    document.getElementById("msg-final").innerHTML = ""; // Limpiar mensaje final
}

// Iniciar juego al cargar la página (por defecto a nivel fácil)
window.onload = function () {
    inicio(6); // Inicia con 6 intentos (nivel fácil)
};

// Función para establecer el nivel
function establecerNivel(nivel) {
    if (nivel === "facil") {
        inicio(6);
    } else if (nivel === "intermedio") {
        inicio(4);
    } else if (nivel === "dificil") {
        inicio(2);
    }
}
