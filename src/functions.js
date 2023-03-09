let ligado = false; 

function handleClick(){
    let textoSuporte = document.getElementById("textoSuporte");
    ligado = !ligado
    if (ligado) {
        textoSuporte.style.display = "block";
    } else {
        textoSuporte.style.display = "none";
    }
}