var originalInput = document.getElementById('input1');
var incriptado=document.getElementById("input3");
let numeros=document.querySelector("#numeros").value
var salidaoriginal=document.getElementById("input2");
var salidaencriptada=document.getElementById("input4");
numeros=parseInt(numeros)
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function textCipher() {
    let originalMessage = originalInput.value.toLowerCase();
    let encryptedMessage = '';
    let numeros=document.querySelector("#numeros").value
    numeros=parseInt(numeros)
    let Number = numeros < 0;
    
    if (Number) {
        mensajedesplazamiento.style.display = 'block';
        return;
    } else {
        mensajedesplazamiento.style.display = 'none';
    }

    originalMessage.split('').forEach((verificacion) => {
        let originalIndex = alphabet.indexOf(verificacion);
        
        if (originalIndex !== -1) {
            let newIndex = (originalIndex + numeros) % alphabet.length;
            encryptedMessage += alphabet[newIndex];
            if (newIndex < 0) {
                newIndex += alphabet.length;
            }
        } else {
            encryptedMessage += verificacion; 
        }
    });
    salidaoriginal.value=encryptedMessage
}
function textCifrado() {
    let originalMessage = incriptado.value.toLowerCase();
    let numeros = document.querySelector("#numeros").value;
    numeros = parseInt(numeros);
    let encryptedMessage = '';
    let Number = numeros < 0
    console.log(numeros)
    if (Number) {
        mensajedesplazamiento.style.display = 'block';
        return;
    } else {
        mensajedesplazamiento.style.display = 'none';
    }

    originalMessage.split('').forEach((verificacion) => {
        let originalIndex = alphabet.indexOf(verificacion);
        {
            hasInvalidCharacters = true;
        }
        if (originalIndex !== -1) {
            let newIndex = (originalIndex - numeros + alphabet.length) % alphabet.length;
            encryptedMessage += alphabet[newIndex];
        } else {
            encryptedMessage += verificacion; 
        }
    });
    salidaencriptada.value = encryptedMessage;
}

