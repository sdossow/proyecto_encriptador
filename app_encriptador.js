// Función para encriptar el texto
function encriptar() {
    const inputText = document.getElementById("inputText").value;
    
    // Validación: solo letras minúsculas sin acentos ni caracteres especiales
    if (!/^[a-z\s]+$/.test(inputText)) {
        document.getElementById("mensajeValidacion").style.display = "block";
        return;
    } else {
        document.getElementById("mensajeValidacion").style.display = "none";
    }

    // Reglas de encriptación
    const encriptado = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("outputText").textContent = encriptado;
}

// Función para desencriptar el texto
function descifrar() {
    const inputText = document.getElementById("inputText").value;

    // Reglas de desencriptación
    const desencriptado = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputText").textContent = desencriptado;
}

// Función para copiar el texto encriptado o desencriptado
function copiarTexto() {
    const outputText = document.getElementById("outputText").textContent;
    navigator.clipboard.writeText(outputText).then(function() {
        alert("Texto copiado al portapapeles!");
    }, function(err) {
        console.error("Error al copiar el texto: ", err);
    });
}
