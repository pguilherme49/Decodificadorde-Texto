// Lógica de criptografia
let vogaisNormais = ["e", "i", "a", "o", "u"];
let vogaisCriptografadas = ["enter", "imes", "ai", "ober", "ufat"];

// Conversor das vogais
const conversorVogais = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

const conversorVogaisCriptografadas = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
}

// Criptografador
function criptografadorTexto (texto) {
    let textoConvertido = texto;
    vogaisNormais.forEach(function (letra) {
        textoConvertido = textoConvertido.replaceAll(letra, conversorVogais[letra]);
    })
    return textoConvertido;
}

function descriptografadorTexto (texto) {
    let textoParaConverter = texto;
    vogaisCriptografadas.forEach(function (letra) {
        textoParaConverter = textoParaConverter.replaceAll(letra, conversorVogaisCriptografadas[letra]);
    })
    return textoParaConverter;
}

// Função para verificação dos acentos e letras maiusculas e dar ação para funções acima
function criptografarEVerificar() {
    let campoTexto = document.getElementById('container__texto');
    let btnCrpt = document.querySelector('.container__botoes__crpt');

    btnCrpt.addEventListener('click', function (evento) {
        evento.preventDefault();
        const textoCriptografado = criptografadorTexto(campoTexto.value);

        if (campoTexto.value != '') {
            let campoVazio = document.querySelector('.mensagem__vazio');
            campoVazio.classList.add('oculto');
    
            let campoPreenchido = document.querySelector('.mensagem_resultado');
            campoPreenchido.classList.remove('oculto');
    
            let resultado = document.querySelector('.mensagem_resultado textarea');
            
            let minusculas = textoCriptografado.toLowerCase();
    
            // Verifica se tem caracter especial
            function caracterEspecial(texto) {
                const caracteresEspeciais = /[`!@#$%^&*()_+\-=\[\]{};':"\|,.<>?~]/;
                return caracteresEspeciais.test(texto);
            }
    
            // Verifica se tem acento e se exitem letras maiusculas
            let comAcento = textoCriptografado;
            let semAcento = comAcento.normalize('NFD');
    
            if (textoCriptografado === minusculas && textoCriptografado === semAcento && caracterEspecial(textoCriptografado) == false) {
                resultado.textContent = textoCriptografado;
            } else {
                resultado.textContent = 'Não é possível o uso de letras maiúsculas ou com acento ou caracteres especiais.'
            }
        }  
    })
}

criptografarEVerificar();

function descriptografarEVerificar() {
    let campoTexto = document.getElementById('container__texto');
    let btnDscrpt = document.querySelector('.container__botoes__dscrpt');

    btnDscrpt.addEventListener('click', function (evento) {
        evento.preventDefault();
        const textoDescriptografado = descriptografadorTexto(campoTexto.value);

        if (campoTexto.value != '') {
            let campoVazio = document.querySelector('.mensagem__vazio');
            campoVazio.classList.add('oculto');

            let campoPreenchido = document.querySelector('.mensagem_resultado');
            campoPreenchido.classList.remove('oculto');
        }
        
        let resultado = document.querySelector('.mensagem_resultado textarea');
        
        let minusculas = textoDescriptografado.toLowerCase();

        function caracterEspecial(texto) {
            const caracteresEspeciais = /[`!@#$%^&*()_+\-=\[\]{};':"\|,.<>?~]/;
                return caracteresEspeciais.test(texto);
        }

        let comAcento = textoDescriptografado;
        let semAcento = comAcento.normalize('NFD');

        if (textoDescriptografado === minusculas && textoDescriptografado === semAcento && caracterEspecial(textoDescriptografado) == false) {
            resultado.textContent = textoDescriptografado;            
        } else {
            resultado.textContent = 'Não é possível o uso de letras maiúsculas ou com acento ou caracteres especiais.';
        }
    })
}

descriptografarEVerificar();


// Botão copiar
function btnCopiar() {
    campoTexto = document.getElementById('mensagem__texto');
    campoTexto.select();
    document.execCommand('copy');
    alert('Texto copiado!');
}
