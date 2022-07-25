function escribirEnDiv(id, datos){
    document.querySelector(id).textContent = datos
}

// Contador ---------------------------------------------------
var contador = 0
function subir(){
    contador ++
    escribirEnDiv("#contador", contador)
}

function bajar(){
    contador --
    escribirEnDiv("#contador", contador)
}

function resetContador(){
    contador = 0
    escribirEnDiv("#contador", contador)
}

// Temporizador -----------------------------------------------
var tiempoInicial = 0
var tiempoParado = 0
var activoTemp = 0
var tiempoaRestar1 = 0
var tiempoaRestar2 = 0
var tiempoaRestarTotal = 0

function startTemporizador(){
    if(activoTemp == 0){
        activoTemp = 1
        if(tiempoInicial == 0){
            tiempoInicial = (new Date()).getTime()
            document.querySelector("#comenzar").style.display = "none";
            document.querySelector("#continuar").style.display = "inline";
            ObtTiempo()
        }
    }
}

function continuarTemporizador(){
    tiempoaRestar2 = (new Date()).getTime()
    tiempoaRestarTotal = tiempoaRestar2 - tiempoaRestar1 + tiempoaRestarTotal
    activoTemp = 1
    ObtTiempo()
}

function stopTemporizador(){
    activoTemp = 0
    tiempoaRestar1 = (new Date()).getTime()
}

function resetTemporizador(){
    escribirEnDiv("#temporizador", ajustarTiempo(0))
    tiempoInicial = 0
    activoTemp = 0
    tiempoactivo = 0
    document.querySelector("#comenzar").style.display = "inline";
    document.querySelector("#continuar").style.display = "none";
}

function ObtTiempo(){
    if(activoTemp == 1){
        tiempoactivo = (((new Date()).getTime())-tiempoInicial)-tiempoaRestarTotal
        escribirEnDiv("#temporizador", ajustarTiempo(tiempoactivo))
        setTimeout(ObtTiempo, 10)
    } else{
        return
    }
}
function ajustarTiempo(milisegundos){
    milisegundos.toFixed(2)
    let segundos = parseInt((milisegundos / 1000).toFixed(2))
    let minutos = parseInt((segundos / 60).toFixed(2))
    let horas = parseInt((minutos / 60).toFixed(2))
    
    return mensaje = horas + ":" + minutos + ":" + segundos +":" + milisegundos
}