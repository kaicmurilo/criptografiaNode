const mensagemSecreta = "Estudando cifras e tokens"
console.log("Mensagem Original " + mensagemSecreta)

function cifraMensagem(mensagem, movimentos) {
    //corta em array e separa cada caracter
    const mensagemCifrada = mensagem.split('').map(caractere => {
        // Char cod At retorna o Unicode do caractere em um índice especificado (posição) em uma string
        const codigoCarcatere = caractere.charCodeAt(0)
        // O método String.fromCharCode() é usado para criar uma string a partir de uma determinada sequência de unidades de código UTF-16.
        return String.fromCharCode(codigoCarcatere + movimentos)
    })
    //Junta o array criado
    return mensagemCifrada.join('')
}
function decifraMensagem(mensagem, movimentos) {
    //corta em array e separa cada caracter
    const mensagemCifrada = mensagem.split('').map(caractere => {
        // Char cod At retorna o Unicode do caractere em um índice especificado (posição) em uma string
        const codigoCarcatere = caractere.charCodeAt(0)
        // O método String.fromCharCode() é usado para criar uma string a partir de uma determinada sequência de unidades de código UTF-16.
        return String.fromCharCode(codigoCarcatere - movimentos)
    })
    //Junta o array criado
    return mensagemCifrada.join('')
}

const mensagemCifrada = cifraMensagem(mensagemSecreta, 3)
console.log("Mensagem Cifrada " + mensagemCifrada)

const mensagemDecifrada = decifraMensagem(mensagemCifrada, 3)
console.log("Mensagem Decifrada " + mensagemDecifrada)




