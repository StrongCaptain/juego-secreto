let listaNumerosSorteados = [];
let numeroMaximo = 10;

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles.');
    } else {
        //Si el numero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    };
};

let numeroSecreto = 0;
let intentos = 1;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function verificarIntento(){
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);

    if (numeroDeusuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroDeusuario > numeroSecreto){
            asignarTextoElemento ('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        };
        intentos ++;
        limpiarCaja();
    };
    return;
};

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
};

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!.');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    //console.log(`El número secreto es: ${numeroSecreto}`);
    intentos = 1;
};

function reiniciarJuego (){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
};

condicionesIniciales();

/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto.'*/

/*
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10.';*/
