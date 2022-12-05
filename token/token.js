import jwt from 'jsonwebtoken'

const chaveSecreta = "chaveSuperSecreta"

const token = jwt.sign(
    {
        apelido: "km",
        curso: "Seguranca e node.js",
    },
    chaveSecreta
)

console.log(token)


//decodificar

const tokenDecodificado = jwt.verify(token, chaveSecreta)
console.log(tokenDecodificado)