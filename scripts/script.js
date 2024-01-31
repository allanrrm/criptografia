let arrayDescriptografia = ['a', 'e', 'i', 'o', 'u'];
let arrayCriptografia = ['ai', 'enter', 'imes', 'ober', 'ufat'];
let resultado = '';
let caracterResultado = '';

function exibirTextoNaTela(idTag, texto) {
    let campo = document.getElementById(idTag);
    campo.innerHTML = texto;
}

function copiar() {
    let copiarTexto = document.getElementById("idResultado");
    navigator.clipboard.writeText(copiarTexto.innerHTML);
}

function encriptografar() {
    resultado = ''
    let caracterVerificado = ''
    let textoSerCriptografado = (document.getElementById('textoCriptografarDescriptografar').value).split('');
    let arrayCriptado = textoSerCriptografado
    let leresultado = '';
    for (i = 0; i < arrayCriptado.length; i++) {
        caracterVerificado = textoSerCriptografado[i];
        if (arrayDescriptografia.includes(caracterVerificado)) {
            for (j = 0; j < arrayDescriptografia.length; j++) {
                caracterVerificado = caracterVerificado.replace(arrayDescriptografia[j], arrayCriptografia[j]);
                if (caracterVerificado == arrayCriptografia[j]) {
                    leresultado += caracterVerificado;
                }
            }
        }
        else {
            leresultado += caracterVerificado;
        }
    }
    resultado = leresultado;
    exibirTextoNaTela('idResultado', resultado);
}
// resultado = '';
// let caracterResultado;
// let textoSerCriptografado = (document.getElementById('textoCriptografarDescriptografar').value).split('');
// for (i = 0; i < textoSerCriptografado.length; i++) {
//     if (arrayDescriptografia.includes(textoSerCriptografado[i])) {

//         caracterResultado = encriptar(textoSerCriptografado[i], arrayDescriptografia, arrayCriptografia);
//     }
//     else {
//         caracterResultado = textoSerCriptografado[i];
//     }
//     resultado = resultado + caracterResultado;
// }
// exibirTextoNaTela('idResultado', resultado);


function descriptografar() {
    resultado = '';
    let descriptografarTexto = (document.getElementById('textoCriptografarDescriptografar').value);
    for (i = 0; i <= arrayCriptografia.length; i++) {
        resultado = descriptografarTexto
        //Aqui foi necessario dar um new RegExp (Expressão regular) de modo a utilizar a expressão regular em uma palavra
        //que já estava dentro uma variavel.
        descriptografarTexto = descriptografarTexto.replace(new RegExp(arrayCriptografia[i], 'g'), arrayDescriptografia[i]);
    }
    exibirTextoNaTela('idResultado', resultado);
}

// function encriptar(caracter, arrayEntrada, arraySaida) {

//     switch (caracter) {
//         case arrayEntrada[0]:
//             return caracter = arraySaida[0];
//         case arrayEntrada[1]:
//             return caracter = arraySaida[1];
//         case arrayEntrada[2]:
//             return caracter = arraySaida[2];
//         case arrayEntrada[3]:
//             return caracter = arraySaida[3];
//         case arrayEntrada[4]:
//             return caracter = arraySaida[4];

//     }
// }

/* onkeyup - evento que dispara em tempo de execução, pretendo utilizar quando o usuario usar algum tipo de caracter especial
etapa final do projeto */