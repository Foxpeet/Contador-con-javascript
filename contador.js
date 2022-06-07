var contador = 0
function subir(){
    contador ++
    document.getElementById("contador").textContent = contador
    return
}

function bajar(){
    contador --
    document.getElementById("contador").textContent = contador
    return
}

function resetear(){
    contador = 0
    document.getElementById("contador").textContent = contador
    return
}