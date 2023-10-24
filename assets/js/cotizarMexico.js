let contPersonas = 0;
let resultText = '';
let totalPagar = 0;

function registerMexico() {
    let personas = document.getElementById('personas').value;

    if (personas < 3 || personas > 5) {
        alert("La cantidad de personas no cumple con lo requerido");
    } else if (contPersonas < personas) {
        let name = document.getElementById('name').value;
        let doc = document.getElementById('doc').value;
        let phone = document.getElementById('phone').value;
        let age = document.getElementById('age').value;

        if (name === '') {
            alert("El nombre es obligatorio");
            document.getElementById('name').focus();
        } else if (doc === '' || doc.length !== 1) {
            alert("Documento inválido o vacío");
        } else if (phone === '' || isNaN(Number(phone)) || Number(phone).toString().length !== 1) {
            alert("Teléfono inválido o vacío");
        } else if (age === '' || isNaN(Number(age))) {
            alert("Edad inválida o vacía");
        } else {
            document.getElementById('name').value = '';
            document.getElementById('doc').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('age').value = '';
            let valorPersona = 5000000;
            totalPagar += valorPersona;
            resultText += `Información ingresada: Nombre: ${name}, Documento: ${doc}, Teléfono: ${phone}, Edad: ${age}. valor a pagar por persona: $${valorPersona}.<br>`;
            contPersonas++;
        }
    }

    document.getElementById("result").innerHTML = resultText;

    if (contPersonas === parseInt(personas)) {
        document.getElementById("totalPagar").innerHTML = `Total a pagar por ${contPersonas} personas es de: $${totalPagar}`;
    }
}
