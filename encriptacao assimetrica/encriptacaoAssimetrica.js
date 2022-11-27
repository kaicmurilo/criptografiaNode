import { generateKeyPairSync, publicEncrypt, privateEncrypt, privateDecrypt } from 'crypto'

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
})

//console.log(publicKey)
//console.log(privateKey)

const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from(" Mensagem secreta")
)

console.log(`Dados Cifrados: \n ${dadosCriptografados.toString('hex')}`)

// ---- transmissao -----

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
)

console.log(`Dados Decrifrados: \n ${dadosDecifrados.toString('utf-8')}`)