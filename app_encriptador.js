function encriptar(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function encriptarTexto() {
    const inputText = document.getElementById('inputText').value;
    const outputText = encriptar(inputText);
    document.getElementById('output').innerText = 'Texto encriptado: ' + outputText;
}

function desencriptarTexto() {
    const inputText = document.getElementById('inputText').value;
    const outputText = desencriptar(inputText);
    document.getElementById('output').innerText = 'Texto desencriptado: ' + outputText;
}

// Asignar eventos a los botones
document.getElementById('encriptarBtn').addEventListener('click', encriptarTexto);
document.getElementById('desencriptarBtn').addEventListener('click', desencriptarTexto);
