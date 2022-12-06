import { createHash } from 'crypto'

function criaHash(dado, estrategia) {
    return createHash(estrategia).update(dado).digest('hex')
}

const senhaComuns = ["senha", "123456", "senha123", "admin", "blink182", "meuAniversario", "senha123456", "brasil", "102030"]

const rainbowTable = senhaComuns.map(senha => {
    return [senha, criaHash(senha, "sha256")]
})

// console.log(rainbowTable)

const hashesVazadas = ["b6e062a399856914df17362e766a54a7a9eade093a31566fa2899813d57c269f", "b08b0a5c8892079ef20854589792e05957f60ac9bea6e58b0320550d752a0bb3", "be526f2a2e895e44a093f35bc69aacba4e9ec06834297debf48820caf66f76f6"]

hashesVazadas.map(hashVazada => {
    rainbowTable.map(parGerado => {
        if (hashVazada === parGerado[1])
            console.log(`senha encontrada: a hash ${hashVazada} equivale a senha ${parGerado[0]}`)
    })
})

